import { NextRequest, NextResponse } from 'next/server';
import { captureOrder, getOrder } from '@/lib/paypal';
import { verifyOrderOwnership, updateOrderStatus, getOrderByPaypalId } from '@/lib/supabase';

/**
 * PayPal Capture Order Endpoint (Bug #5 & #7 Fix)
 * 
 * POST /api/payment/paypal/capture-order
 * 
 * Captures a PayPal order and updates the database:
 * - Verifies order ownership (Bug #7)
 * - Updates order status to 'completed' (Bug #5)
 * - Validates session binding
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, sessionId } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required for ownership verification' },
        { status: 400 }
      );
    }

    // Get order info from PayPal
    const order = await getOrder(orderId);

    // Validate order status
    if (order.status !== 'APPROVED') {
      return NextResponse.json(
        { error: 'Order not approved yet', status: order.status },
        { status: 400 }
      );
    }

    // Verify order ownership (Bug #7 Fix)
    const dbOrder = await verifyOrderOwnership(orderId, sessionId);
    
    if (!dbOrder) {
      return NextResponse.json(
        { error: 'Order not found or does not belong to this session' },
        { status: 403 }
      );
    }

    // Check if order is already completed (prevent double capture)
    if (dbOrder.status === 'completed') {
      return NextResponse.json({
        success: true,
        captureId: order.purchase_units?.[0]?.payments?.captures?.[0]?.id,
        status: 'already_completed',
        message: 'Order was already completed'
      });
    }

    // Capture the order (complete payment)
    const capture = await captureOrder(orderId);

    // Update order status in database (Bug #5 Fix)
    const updated = await updateOrderStatus(orderId, 'completed');
    
    if (!updated) {
      console.error('Failed to update order status to completed:', orderId);
      // Continue anyway - the payment was captured successfully
    }

    return NextResponse.json({
      success: true,
      captureId: capture.purchase_units?.[0]?.payments?.captures?.[0]?.id,
      status: capture.status,
      orderId: orderId,
      amount: capture.purchase_units?.[0]?.payments?.captures?.[0]?.amount,
      planId: dbOrder.plan_id
    });

  } catch (error: any) {
    console.error('PayPal capture order error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to capture order' },
      { status: 500 }
    );
  }
}
