// PayPal API 集成
// 使用沙盒环境进行测试

const PAYPAL_API_BASE = 'https://api-m.sandbox.paypal.com'; // 沙盒环境
// const PAYPAL_API_BASE = 'https://api-m.paypal.com'; // 生产环境

// 沙盒 API 凭据（用户提供）
const PAYPAL_CLIENT_ID = 'AQ8siwkcc8biu09j4SIF1vBgaqpayniKUvAJ23r5cpQ51B4LVeswdejvmt79dbStFLdPGxs7H1R8jSZ4';
const PAYPAL_CLIENT_SECRET = 'EJp92mWDIZn4gabbxQQfoZfSov-bh5Fp9CI2Ypnbinqs98iAYp7o-PpK05ZbaFY_L2dkwaQRqAjwUfBm';

// 获取 Access Token
async function getAccessToken(): Promise<string> {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');
  
  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get access token: ${error}`);
  }

  const data = await response.json();
  return data.access_token;
}

// 创建订单
export async function createOrder(amount: number, currency: string = 'USD', description: string = 'Attachment Style Report') {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
          },
          description: description,
        },
      ],
      application_context: {
        brand_name: 'Attachment Style Assessment',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/result/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/result/cancel`,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create order: ${error}`);
  }

  const order = await response.json();
  return order;
}

// 捕获订单（完成支付）
export async function captureOrder(orderId: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to capture order: ${error}`);
  }

  const capture = await response.json();
  return capture;
}

// 获取订单详情
export async function getOrder(orderId: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get order: ${error}`);
  }

  const order = await response.json();
  return order;
}

// 退款
export async function refundPayment(captureId: string, amount: number, currency: string = 'USD') {
  const accessToken = await getAccessToken();

  // 先获取支付详情
  const paymentResponse = await fetch(`${PAYPAL_API_BASE}/v2/payments/captures/${captureId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!paymentResponse.ok) {
    const error = await paymentResponse.text();
    throw new Error(`Failed to get payment: ${error}`);
  }

  const payment = await paymentResponse.json();

  // 创建退款
  const response = await fetch(`${PAYPAL_API_BASE}/v2/payments/refunds`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: {
        currency_code: currency,
        value: amount.toFixed(2),
      },
      invoice_id: `refund_${captureId}_${Date.now()}`,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to refund: ${error}`);
  }

  const refund = await response.json();
  return refund;
}

// 验证 Webhook 签名（生产环境需要）
export function verifyWebhookSignature(payload: string, headers: Record<string, string>): boolean {
  // 沙盒环境跳过验证
  if (PAYPAL_API_BASE.includes('sandbox')) {
    return true;
  }
  
  // 生产环境需要实现签名验证
  // https://developer.paypal.com/docs/api-basics/notifications/webhook_signature/
  return true;
}

// 定价配置
export const PRICING = {
  BASIC: {
    id: 'basic_report',
    name: 'Basic Report',
    price: 12.00,
    currency: 'USD',
    description: 'Basic attachment style analysis with personalized insights',
  },
  PREMIUM: {
    id: 'premium_report', 
    name: 'Premium Report',
    price: 15.00,
    currency: 'USD',
    description: 'Comprehensive report with relationship recommendations',
  },
  COMPLETE: {
    id: 'complete_report',
    name: 'Complete Report',
    price: 19.00,
    currency: 'USD',
    description: 'Full analysis with 8-week improvement plan and AI coaching',
  },
};

export default {
  createOrder,
  captureOrder,
  getOrder,
  refundPayment,
  verifyWebhookSignature,
  PRICING,
};
