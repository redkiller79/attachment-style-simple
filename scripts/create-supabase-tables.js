/**
 * Supabase Database Setup Script
 * Creates all required tables for BondType payment system
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase configuration');
  process.exit(1);
}

// Create admin client with service role key
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const sqlStatements = [
  // Enable UUID extension
  `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`,

  // Create test_results table
  `CREATE TABLE IF NOT EXISTS test_results (
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
  );`,

  // Create indexes for test_results
  `CREATE INDEX IF NOT EXISTS idx_test_results_session_id ON test_results(session_id);`,
  `CREATE INDEX IF NOT EXISTS idx_test_results_primary_style ON test_results(primary_style);`,
  `CREATE INDEX IF NOT EXISTS idx_test_results_created_at ON test_results(created_at DESC);`,

  // Create user_sessions table
  `CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_token TEXT UNIQUE NOT NULL,
    browser_info TEXT,
    referrer TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );`,

  `CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);`,

  // Create payments table
  `CREATE TABLE IF NOT EXISTS payments (
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
  );`,

  `CREATE INDEX IF NOT EXISTS idx_payments_paypal_order_id ON payments(paypal_order_id);`,
  `CREATE INDEX IF NOT EXISTS idx_payments_test_result_id ON payments(test_result_id);`,

  // Create feedback table
  `CREATE TABLE IF NOT EXISTS feedback (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    test_result_id UUID REFERENCES test_results(id) ON DELETE SET NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );`,

  // Create update timestamp function
  `CREATE OR REPLACE FUNCTION update_updated_at_column()
   RETURNS TRIGGER AS $$
   BEGIN
     NEW.updated_at = NOW();
     RETURN NEW;
   END;
   $$ LANGUAGE plpgsql;`,

  // Create triggers
  `DROP TRIGGER IF EXISTS update_test_results_updated_at ON test_results;`,
  `CREATE TRIGGER update_test_results_updated_at
   BEFORE UPDATE ON test_results
   FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();`,

  `DROP TRIGGER IF EXISTS update_payments_updated_at ON payments;`,
  `CREATE TRIGGER update_payments_updated_at
   BEFORE UPDATE ON payments
   FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();`,

  `DROP TRIGGER IF EXISTS update_user_sessions_last_active ON user_sessions;`,
  `CREATE TRIGGER update_user_sessions_last_active
   BEFORE UPDATE ON user_sessions
   FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();`
];

async function setupDatabase() {
  console.log('🚀 Starting Supabase database setup...\n');
  console.log(`Project URL: ${supabaseUrl}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < sqlStatements.length; i++) {
    const sql = sqlStatements[i];
    
    try {
      // Use raw SQL execution through Supabase
      const { data, error } = await supabase.rpc('exec', {
        query: sql
      }).single();

      // If RPC doesn't work, try alternative approach
      if (error) {
        // Try using the REST API directly
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseServiceKey,
            'Authorization': `Bearer ${supabaseServiceKey}`
          },
          body: JSON.stringify({ query: sql })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
      }
      
      successCount++;
      const shortSql = sql.substring(0, 60).replace(/\s+/g, ' ');
      console.log(`✅ [${i + 1}/${sqlStatements.length}] ${shortSql}...`);
    } catch (err) {
      errorCount++;
      const shortSql = sql.substring(0, 60).replace(/\s+/g, ' ');
      console.log(`❌ [${i + 1}/${sqlStatements.length}] ${shortSql}...`);
      console.log(`   Error: ${err.message}`);
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`\n📊 Results: ${successCount} succeeded, ${errorCount} failed`);

  if (errorCount === 0) {
    console.log('\n✅ Database setup completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Test payment flow');
    console.log('   2. Verify order tracking');
    console.log('   3. Deploy to production');
  } else {
    console.log('\n⚠️  Some statements failed.');
    console.log('\n💡 Try running the SQL manually in Supabase SQL Editor.');
  }
}

// Try to use pg_execute if available, otherwise use REST API
async function tryPgExecute() {
  try {
    const { data, error } = await supabase.rpc('pg_execute', {
      query: 'SELECT 1'
    });
    return true;
  } catch {
    return false;
  }
}

setupDatabase().catch(console.error);
