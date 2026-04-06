import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@/lib/paypal';
import { updateOrderStatus, getOrderByPaypalId } from '@/lib/supabase';

// PayPal Webhook event types
type PayPalEventType = 
  | 'CHECKOUT.ORDER.APPROVED'
  | 'PAYMENT.CAPTURE.COMPLETED'
  | 'PAYMENT.CAPTURE.DENIED'
  | 'PAYMENT.CAPTURE.REFUNDED'
  | 'CHECKOUT.ORDER.COMPLETED';

interface PayPalWebhookPayload {
  id: string;
  event_type: PayPalEventType;
  resource: any;
  create_time: string;
  summary?: string;
}

// Interface for the order resource from webhook
interface PayPalOrderResource {
  id: string;
  status?: string;
  purchase_units?: Array<{
    reference_id?: string;
    payments?: {
      captures?: Array<{
        id: string;
        status: string;
        amount: {
          currency_code: string;
          value: string;
        };
      }>;
    };
  }>;
}

/**
 * PayPal Webhook Handler (Bug #8 Fix)
 * 
 * POST /api/payment/paypal/webhook
 * 
 * Handles PayPal webhook events:
 * - PAYMENT.CAPTURE.COMPLETED: Update order status, trigger confirmation
 * - PAYMENT.CAPTURE.DENIED: Log for investigation
 * - PAYMENT.CAPTURE.REFUNDED: Update order status to 'refunded'
 * - CHECKOUT.ORDER.APPROVED: Log order approval
 */

// Handler for PAYMENT.CAPTURE.COMPLETED
async function handlePaymentCompleted(resource: PayPalOrderResource) {
  const paypalOrderId = resource.id;
  
  console.log('Processing PAYMENT.CAPTURE.COMPLETED for order:', paypalOrderId);
  
  try {
    // Update order status to completed
    const updated = await updateOrderStatus(paypalOrderId, 'completed');
    
    if (updated) {
      console.log('Order status updated to completed:', paypalOrderId);
      
      // Get order details for sending confirmation email
      const order = await getOrderByPaypalId(paypalOrderId);
      
      if (order) {
        // TODO: Send confirmation email
        // await sendConfirmationEmail(order);
        console.log('Would send confirmation email for order:', order.id);
      }
    } else {
      console.error('Failed to update order status:', paypalOrderId);
    }
  } catch (error) {
    console.error('Error handling PAYMENT.CAPTURE.COMPLETED:', error);
  }
}

// Handler for PAYMENT.CAPTURE.DENIED
async function handlePaymentDenied(resource: PayPalOrderResource) {
  const paypalOrderId = resource.id;
  
  console.log('Processing PAYMENT.CAPTURE.DENIED for order:', paypalOrderId);
  
  try {
    // Update order status to failed
    const updated = await updateOrderStatus(paypalOrderId, 'failed');
    
    if (updated) {
      console.log('Order status updated to failed:', paypalOrderId);
      
      // Log for investigation (could also alert admin)
      const order = await getOrderByPaypalId(paypalOrderId);
      
      if (order) {
        console.warn('Payment denied for order:', {
          orderId: order.id,
          sessionId: order.session_id,
          planId: order.plan_id,
          amount: order.amount,
          timestamp: new Date().toISOString()
        });
        
        // TODO: Send notification to admin
        // await sendAdminAlert(order, 'PAYMENT_DENIED');
      }
    }
  } catch (error) {
    console.error('Error handling PAYMENT.CAPTURE.DENIED:', error);
  }
}

// Handler for PAYMENT.CAPTURE.REFUNDED
async function handlePaymentRefunded(resource: PayPalOrderResource) {
  const paypalOrderId = resource.id;
  
  console.log('Processing PAYMENT.CAPTURE.REFUNDED for order:', paypalOrderId);
  
  try {
    const updated = await updateOrderStatus(paypalOrderId, 'refunded');
    
    if (updated) {
      console.log('Order status updated to refunded:', paypalOrderId);
      
      // TODO: Handle refund logic
      // - Revoke access to premium content
      // - Send refund confirmation to user
    }
  } catch (error) {
    console.error('Error handling PAYMENT.CAPTURE.REFUNDED:', error);
  }
}

// Handler for CHECKOUT.ORDER.APPROVED
async function handleOrderApproved(resource: PayPalOrderResource) {
  const paypalOrderId = resource.id;
  
  console.log('Processing CHECKOUT.ORDER.APPROVED for order:', paypalOrderId);
  
  // Log the approval - capture will come in a separate event
  // This is just for tracking/debugging
  console.log('Order approved by PayPal, awaiting capture:', paypalOrderId);
}

export async function POST(request: NextRequest) {
  try {
    const payload: PayPalWebhookPayload = await request.json();
    const headers = Object.fromEntries(request.headers.entries());

    // Verify webhook signature (production environment)
    const isValid = verifyWebhookSignature(JSON.stringify(payload), headers);
    
    if (!isValid) {
      console.error('Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    console.log(`Received PayPal webhook: ${payload.event_type}`, {
      webhookId: payload.id,
      eventType: payload.event_type,
      resourceId: payload.resource?.id,
      timestamp: payload.create_time
    });

    // Handle different event types
    switch (payload.event_type) {
      case 'CHECKOUT.ORDER.APPROVED':
        await handleOrderApproved(payload.resource);
        break;

      case 'PAYMENT.CAPTURE.COMPLETED':
        await handlePaymentCompleted(payload.resource);
        break;

      case 'PAYMENT.CAPTURE.DENIED':
        await handlePaymentDenied(payload.resource);
        break;

      case 'PAYMENT.CAPTURE.REFUNDED':
        await handlePaymentRefunded(payload.resource);
        break;

      case 'CHECKOUT.ORDER.COMPLETED':
        // This is the final order completion event
        console.log('Order completed:', payload.resource.id);
        break;

      default:
        console.log(`Unhandled event type: ${payload.event_type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error: any) {
    console.error('PayPal webhook error:', error);
    return NextResponse.json(
      { error: error.message || 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Webhook verification endpoint (PayPal needs this to validate the webhook URL)
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'PayPal Webhook endpoint',
    instructions: 'Use POST method to receive webhook events'
  });
}
