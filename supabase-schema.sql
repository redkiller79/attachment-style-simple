-- Supabase Database Schema for Attachment Style Test
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create test_results table
CREATE TABLE IF NOT EXISTS test_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  answers JSONB NOT NULL DEFAULT '[]',
  scores JSONB NOT NULL DEFAULT '{"secure": 0, "anxious": 0, "avoidant": 0, "disorganized": 0}',
  primary_style TEXT NOT NULL,
  secondary_style TEXT,
  ai_summary TEXT,
  report_type TEXT NOT NULL DEFAULT 'basic',
  payment_status TEXT NOT NULL DEFAULT 'pending',
  payment_id TEXT,
  amount DECIMAL(10, 2),
  currency TEXT DEFAULT 'USD',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_test_results_session_id ON test_results(session_id);
CREATE INDEX IF NOT EXISTS idx_test_results_primary_style ON test_results(primary_style);
CREATE INDEX IF NOT EXISTS idx_test_results_created_at ON test_results(created_at DESC);

-- Create user_sessions table for anonymous users
CREATE TABLE IF NOT EXISTS user_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_token TEXT UNIQUE NOT NULL,
  browser_info TEXT,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_active_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  test_result_id UUID REFERENCES test_results(id) ON DELETE CASCADE,
  paypal_order_id TEXT UNIQUE,
  paypal_capture_id TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'pending',
  payment_method TEXT,
  payer_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payments_paypal_order_id ON payments(paypal_order_id);
CREATE INDEX IF NOT EXISTS idx_payments_test_result_id ON payments(test_result_id);

-- Create quiz_responses table to track individual question answers
CREATE TABLE IF NOT EXISTS quiz_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  question_id INTEGER NOT NULL,
  answer INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quiz_responses_session_id ON quiz_responses(session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_responses_question_id ON quiz_responses(question_id);
CREATE INDEX IF NOT EXISTS idx_quiz_responses_created_at ON quiz_responses(created_at DESC);

-- Create users table for email collection (optional)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Create reports table for premium content
CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  session_id TEXT NOT NULL,
  attachment_type TEXT NOT NULL,
  scores JSONB NOT NULL DEFAULT '{"secure": 0, "anxious": 0, "avoidant": 0, "disorganized": 0}',
  premium_unlocked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_reports_session_id ON reports(session_id);
CREATE INDEX IF NOT EXISTS idx_reports_attachment_type ON reports(attachment_type);

-- Create orders table (already referenced in lib/supabase.ts)
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  paypal_order_id TEXT UNIQUE NOT NULL,
  plan_id TEXT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_session_id ON orders(session_id);
CREATE INDEX IF NOT EXISTS idx_orders_paypal_order_id ON orders(paypal_order_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Create feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  test_result_id UUID REFERENCES test_results(id) ON DELETE SET NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- RLS Policies for test_results (allow public read and insert, authenticated update)
CREATE POLICY "Allow public read access to test_results" ON test_results
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to test_results" ON test_results
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access to test_results" ON test_results
  FOR UPDATE USING (true);

-- RLS Policies for user_sessions
CREATE POLICY "Allow public read access to user_sessions" ON user_sessions
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to user_sessions" ON user_sessions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access to user_sessions" ON user_sessions
  FOR UPDATE USING (true);

-- RLS Policies for payments
CREATE POLICY "Allow public read access to payments" ON payments
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to payments" ON payments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access to payments" ON payments
  FOR UPDATE USING (true);

-- RLS Policies for feedback
CREATE POLICY "Allow public read access to feedback" ON feedback
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to feedback" ON feedback
  FOR INSERT WITH CHECK (true);

-- RLS Policies for quiz_responses
CREATE POLICY "Allow public read access to quiz_responses" ON quiz_responses
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to quiz_responses" ON quiz_responses
  FOR INSERT WITH CHECK (true);

-- RLS Policies for users
CREATE POLICY "Allow public read access to users" ON users
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to users" ON users
  FOR INSERT WITH CHECK (true);

-- RLS Policies for reports
CREATE POLICY "Allow public read access to reports" ON reports
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to reports" ON reports
  FOR INSERT WITH CHECK (true);

-- RLS Policies for orders
CREATE POLICY "Allow public read access to orders" ON orders
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to orders" ON orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access to orders" ON orders
  FOR UPDATE USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_test_results_updated_at
  BEFORE UPDATE ON test_results
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at
  BEFORE UPDATE ON payments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_sessions_last_active
  BEFORE UPDATE ON user_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO test_results (session_id, answers, scores, primary_style, secondary_style, ai_summary, report_type, payment_status)
VALUES 
  ('test-session-001', 
   '[1,2,3,4,5]'::jsonb, 
   '{"secure": 25, "anxious": 15, "avoidant": 10, "disorganized": 5}'::jsonb, 
   'secure', 
   'anxious', 
   'You show a secure attachment style with some anxious tendencies. This means you generally have healthy relationship patterns but may sometimes seek more reassurance from partners.', 
   'basic',
   'completed'),
  ('test-session-002',
   '[2,3,4,5,1]'::jsonb,
   '{"secure": 20, "anxious": 20, "avoidant": 8, "disorganized": 7}'::jsonb,
   'anxious',
   'secure',
   'You show an anxious attachment style with some secure tendencies. You may often worry about your relationships and seek frequent reassurance.',
   'premium',
   'completed');
