// PayPal API 集成
// 使用环境变量配置，支持 sandbox 和 live 环境

const PAYPAL_ENVIRONMENT = process.env.PAYPAL_ENVIRONMENT || 'sandbox';

const PAYPAL_API_BASE = PAYPAL_ENVIRONMENT === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
  throw new Error('Missing PayPal credentials: PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET must be set');
}

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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

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
        return_url: `${baseUrl}/result/success`,
        cancel_url: `${baseUrl}/result/cancel`,
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
  if (PAYPAL_ENVIRONMENT === 'sandbox') {
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
    price: 9.99,
    currency: 'USD',
    description: 'Full 36-question assessment with complete attachment profile and PDF report',
  },
  DETAILED_REPORT: {
    id: 'detailed_report',
    name: 'Detailed Report',
    price: 6.99,
    currency: 'USD',
    description: 'In-depth BondType analysis with detailed relationship patterns',
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
