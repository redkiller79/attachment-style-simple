import { NextRequest, NextResponse } from 'next/server';
import { captureOrder, getOrder } from '@/lib/paypal';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, testResultId } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    // 获取订单信息
    const order = await getOrder(orderId);

    // 验证订单状态
    if (order.status !== 'APPROVED') {
      return NextResponse.json(
        { error: 'Order not approved yet', status: order.status },
        { status: 400 }
      );
    }

    // 捕获订单（完成支付）
    const capture = await captureOrder(orderId);

    // 在实际应用中，应该：
    // 1. 更新数据库中的订单状态
    // 2. 生成或解锁测试报告
    // 3. 发送确认邮件

    // await updateOrderInDatabase(orderId, 'COMPLETED', testResultId);

    return NextResponse.json({
      success: true,
      captureId: capture.purchase_units?.[0]?.payments?.captures?.[0]?.id,
      status: capture.status,
      orderId: orderId,
      amount: capture.purchase_units?.[0]?.payments?.captures?.[0]?.amount,
    });

  } catch (error: any) {
    console.error('PayPal capture order error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to capture order' },
      { status: 500 }
    );
  }
}
