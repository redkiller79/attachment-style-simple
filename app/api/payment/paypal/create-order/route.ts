import { NextRequest, NextResponse } from 'next/server';
import { createOrder, PRICING } from '@/lib/paypal';
import { createOrderInDatabase, checkRateLimit } from '@/lib/supabase';

/**
 * PayPal Create Order Endpoint (Bug #5 & #7 Fix)
 * 
 * POST /api/payment/paypal/create-order
 * 
 * Creates a PayPal order and saves it to the database with:
 * - Rate limiting (Bug #7)
 * - Session binding (Bug #7)
 * - Database persistence (Bug #5)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, sessionId } = body;

    // Validate session ID (required for ownership binding)
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Rate limiting check (Bug #7 Fix)
    const rateLimit = checkRateLimit(sessionId);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many order requests. Please try again later.',
          retryAfter: Math.ceil(rateLimit.resetIn / 1000)
        },
        { status: 429 }
      );
    }

    // Validate plan ID
    const plan = PRICING[planId as keyof typeof PRICING];
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid plan ID' },
        { status: 400 }
      );
    }

    // Create PayPal order
    const order = await createOrder(
      plan.price,
      plan.currency,
      `${plan.name} - Attachment Style Analysis`
    );

    // Save order to database (Bug #5 Fix)
    const dbOrder = await createOrderInDatabase(
      sessionId,
      order.id,
      planId,
      plan.price
    );

    if (!dbOrder) {
      console.error('Failed to save order to database, but PayPal order was created:', order.id);
      // Continue anyway - don't fail the request, just log the error
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      approvalUrl: order.links?.find((link: any) => link.rel === 'approve')?.href,
      executeUrl: `/api/payment/paypal/capture-order`,
      rateLimit: {
        remaining: rateLimit.remaining,
        resetIn: rateLimit.resetIn
      }
    });

  } catch (error: any) {
    console.error('PayPal create order error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}
