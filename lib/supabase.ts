import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Lazy initialization to prevent build errors when env vars are missing
let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

// Client-side Supabase client (uses anon key)
export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
}

// Server-side Supabase client (uses service role key for admin operations)
export function getSupabaseAdmin(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseServiceKey) return null;
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  }
  return _supabaseAdmin;
}

// Backwards-compatible proxy that routes to the lazy clients
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase: any = {
  get from() { return getSupabase()?.from; },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabaseAdmin: any = {
  get from() { return getSupabaseAdmin()?.from; },
};

// ============================================
// ORDER MANAGEMENT (Bug #5 Fix)
// ============================================

export interface Order {
  id: string;
  session_id: string;
  paypal_order_id: string;
  plan_id: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  amount: number;
  created_at: string;
  updated_at: string;
}

// Rate limiting: track order creation per session
const orderCreationTracker = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_ORDERS = 5;

export function checkRateLimit(sessionId: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const tracker = orderCreationTracker.get(sessionId);

  if (!tracker || now > tracker.resetTime) {
    orderCreationTracker.set(sessionId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX_ORDERS - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }

  if (tracker.count >= RATE_LIMIT_MAX_ORDERS) {
    return { allowed: false, remaining: 0, resetIn: tracker.resetTime - now };
  }

  tracker.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX_ORDERS - tracker.count, resetIn: tracker.resetTime - now };
}

// Create a new pending order
export async function createOrderInDatabase(
  sessionId: string,
  paypalOrderId: string,
  planId: string,
  amount: number
): Promise<Order | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .insert({
        session_id: sessionId,
        paypal_order_id: paypalOrderId,
        plan_id: planId,
        amount,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating order in database:', error);
      return null;
    }

    return data as Order;
  } catch (error) {
    console.error('Error creating order in database:', error);
    return null;
  }
}

// Update order status
export async function updateOrderStatus(
  paypalOrderId: string,
  status: Order['status']
): Promise<boolean> {
  try {
    const { error } = await supabaseAdmin
      .from('orders')
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq('paypal_order_id', paypalOrderId);

    if (error) {
      console.error('Error updating order status:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating order status:', error);
    return false;
  }
}

// Verify order ownership and get order details
export async function verifyOrderOwnership(
  paypalOrderId: string,
  sessionId: string
): Promise<Order | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('paypal_order_id', paypalOrderId)
      .single();

    if (error || !data) {
      console.error('Order not found:', paypalOrderId);
      return null;
    }

    // Verify session ownership
    if (data.session_id !== sessionId) {
      console.error('Session mismatch for order:', paypalOrderId);
      return null;
    }

    return data as Order;
  } catch (error) {
    console.error('Error verifying order ownership:', error);
    return null;
  }
}

// Get order by session ID (for payment verification)
export async function getOrderBySession(sessionId: string): Promise<Order | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      return null;
    }

    return data as Order;
  } catch (error) {
    console.error('Error getting order by session:', error);
    return null;
  }
}

// Get order by PayPal order ID
export async function getOrderByPaypalId(paypalOrderId: string): Promise<Order | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('paypal_order_id', paypalOrderId)
      .single();

    if (error || !data) {
      return null;
    }

    return data as Order;
  } catch (error) {
    console.error('Error getting order by PayPal ID:', error);
    return null;
  }
}

// Types for our database tables
export interface TestResult {
  id: string;
  session_id: string;
  answers: number[];
  scores: {
    secure: number;
    anxious: number;
    avoidant: number;
    disorganized: number;
  };
  primary_style: string;
  secondary_style?: string;
  ai_summary?: string;
  report_type: 'basic' | 'premium' | 'complete';
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_id?: string;
  amount?: number;
  currency?: string;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  test_result_id: string;
  paypal_order_id?: string;
  paypal_capture_id?: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_method?: string;
  payer_email?: string;
  created_at: string;
  updated_at: string;
}

export interface Feedback {
  id: string;
  test_result_id?: string;
  rating?: number;
  comment?: string;
  created_at: string;
}

// Helper function to save test result
export async function saveTestResult(
  sessionId: string,
  answers: number[],
  scores: TestResult['scores'],
  primaryStyle: string,
  secondaryStyle?: string,
  reportType: TestResult['report_type'] = 'basic'
): Promise<TestResult | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('test_results')
      .insert({
        session_id: sessionId,
        answers,
        scores,
        primary_style: primaryStyle,
        secondary_style: secondaryStyle,
        report_type: reportType,
        payment_status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving test result:', error);
      return null;
    }

    return data as TestResult;
  } catch (error) {
    console.error('Error saving test result:', error);
    return null;
  }
}

// Helper function to get test result
export async function getTestResult(testResultId: string): Promise<TestResult | null> {
  try {
    const { data, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('id', testResultId)
      .single();

    if (error) {
      console.error('Error getting test result:', error);
      return null;
    }

    return data as TestResult;
  } catch (error) {
    console.error('Error getting test result:', error);
    return null;
  }
}

// Helper function to update payment status
export async function updatePaymentStatus(
  testResultId: string,
  paymentStatus: TestResult['payment_status'],
  paymentId?: string,
  amount?: number
): Promise<boolean> {
  try {
    const { error } = await supabaseAdmin
      .from('test_results')
      .update({
        payment_status: paymentStatus,
        payment_id: paymentId,
        amount,
        updated_at: new Date().toISOString()
      })
      .eq('id', testResultId);

    if (error) {
      console.error('Error updating payment status:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating payment status:', error);
    return false;
  }
}

// Helper function to save payment record
export async function savePayment(
  testResultId: string,
  paypalOrderId: string,
  amount: number,
  currency: string = 'USD'
): Promise<Payment | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('payments')
      .insert({
        test_result_id: testResultId,
        paypal_order_id: paypalOrderId,
        amount,
        currency,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving payment:', error);
      return null;
    }

    return data as Payment;
  } catch (error) {
    console.error('Error saving payment:', error);
    return null;
  }
}


