import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Client-side Supabase client (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client (uses service role key for admin operations)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

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
