import { NextRequest, NextResponse } from 'next/server';
import { createOrder, PRICING } from '@/lib/paypal';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, testResultId } = body;

    // 验证计划ID
    const plan = PRICING[planId as keyof typeof PRICING];
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid plan ID' },
        { status: 400 }
      );
    }

    // 创建PayPal订单
    const order = await createOrder(
      plan.price,
      plan.currency,
      `${plan.name} - Attachment Style Analysis`
    );

    // 在实际应用中，应该将order.id和testResultId保存到数据库
    // await saveOrderToDatabase(order.id, testResultId, plan);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      approvalUrl: order.links?.find((link: any) => link.rel === 'approve')?.href,
      executeUrl: `/api/payment/paypal/capture-order`,
    });

  } catch (error: any) {
    console.error('PayPal create order error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}
