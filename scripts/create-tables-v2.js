/**
 * Supabase Table Creation via Management API
 */

const https = require('https');

const PROJECT_REF = 'ywadfzwmuzmskerzzxgk';
const SERVICE_KEY = 'sbp_e84bfa5dc73b633def3027c126d57cbbfba24033';

const sqlStatements = [
  `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,

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
  )`,

  `CREATE INDEX IF NOT EXISTS idx_test_results_session_id ON test_results(session_id)`,
  `CREATE INDEX IF NOT EXISTS idx_test_results_primary_style ON test_results(primary_style)`,
  `CREATE INDEX IF NOT EXISTS idx_test_results_created_at ON test_results(created_at DESC)`,

  `CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_token TEXT UNIQUE NOT NULL,
    browser_info TEXT,
    referrer TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  )`,

  `CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token)`,

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
  )`,

  `CREATE INDEX IF NOT EXISTS idx_payments_paypal_order_id ON payments(paypal_order_id)`,
  `CREATE INDEX IF NOT EXISTS idx_payments_test_result_id ON payments(test_result_id)`,

  `CREATE TABLE IF NOT EXISTS feedback (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    test_result_id UUID REFERENCES test_results(id) ON DELETE SET NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  )`,

  `CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql`,

  `DROP TRIGGER IF EXISTS update_test_results_updated_at ON test_results`,
  `CREATE TRIGGER update_test_results_updated_at BEFORE UPDATE ON test_results FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()`,

  `DROP TRIGGER IF EXISTS update_payments_updated_at ON payments`,
  `CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()`
];

function executeSql(sql) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query: sql });

    const options = {
      hostname: 'api.supabase.com',
      port: 443,
      path: `/v1/projects/${PROJECT_REF}/database/query`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'apikey': SERVICE_KEY
      }
    };

    console.log(`\n🔄 Executing via Management API...`);
    console.log(`   SQL: ${sql.substring(0, 80).replace(/\n/g, ' ')}...`);

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`   Status: ${res.statusCode}`);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ ok: true, data: body });
        } else {
          resolve({ ok: false, error: body });
        }
      });
    });

    req.on('error', err => resolve({ ok: false, error: err.message }));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('╔════════════════════════════════════════════════════╗');
  console.log('║   Supabase Database Setup - Management API         ║');
  console.log('╚════════════════════════════════════════════════════╝');
  console.log(`\nProject: ${PROJECT_REF}`);
  console.log(`API Endpoint: api.supabase.com/v1/projects/${PROJECT_REF}/database/query`);

  let success = 0;
  let failed = 0;

  for (const sql of sqlStatements) {
    const result = await executeSql(sql);

    if (result.ok) {
      console.log('✅ SUCCESS');
      success++;
    } else {
      console.log(`❌ FAILED: ${result.error}`);
      failed++;
    }
  }

  console.log('\n╔════════════════════════════════════════════════════╗');
  console.log(`║   Results: ${success} succeeded, ${failed} failed              ║`);
  console.log('╚════════════════════════════════════════════════════╝');

  if (failed === 0) {
    console.log('\n🎉 All tables created successfully!');
  } else {
    console.log('\n⚠️  Some tables need manual creation.');
  }
}

main().catch(console.error);
