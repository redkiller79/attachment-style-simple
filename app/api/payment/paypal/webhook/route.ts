import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@/lib/paypal';

// PayPal Webhook 事件类型
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
}

export async function POST(request: NextRequest) {
  try {
    const payload: PayPalWebhookPayload = await request.json();
    const headers = Object.fromEntries(request.headers.entries());

    // 验证 webhook 签名（生产环境需要）
    // 沙盒环境跳过验证
    const isValid = verifyWebhookSignature(JSON.stringify(payload), headers);
    
    if (!isValid) {
      console.error('Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    console.log(`Received PayPal webhook: ${payload.event_type}`, payload.id);

    // 处理不同的事件类型
    switch (payload.event_type) {
      case 'CHECKOUT.ORDER.APPROVED':
        // 订单被批准
        console.log('Order approved:', payload.resource.id);
        // await handleOrderApproved(payload.resource);
        break;

      case 'PAYMENT.CAPTURE.COMPLETED':
        // 支付完成
        console.log('Payment completed:', payload.resource.id);
        // await handlePaymentCompleted(payload.resource);
        break;

      case 'PAYMENT.CAPTURE.DENIED':
        // 支付被拒绝
        console.log('Payment denied:', payload.resource.id);
        // await handlePaymentDenied(payload.resource);
        break;

      case 'PAYMENT.CAPTURE.REFUNDED':
        // 退款
        console.log('Payment refunded:', payload.resource.id);
        // await handlePaymentRefunded(payload.resource);
        break;

      case 'CHECKOUT.ORDER.COMPLETED':
        // 整个订单完成
        console.log('Order completed:', payload.resource.id);
        // await handleOrderCompleted(payload.resource);
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

// Webhook 验证端点（PayPal 需要验证 webhook）
export async function GET(request: NextRequest) {
  // 这是PayPal验证webhook URL需要的端点
  // 在实际部署时需要在PayPal开发者平台配置webhook URL
  return NextResponse.json({
    message: 'PayPal Webhook endpoint',
    instructions: 'Use POST method to receive webhook events'
  });
}
