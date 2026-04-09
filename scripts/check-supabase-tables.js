/**
 * Supabase Database Check Script
 * Run: node scripts/check-supabase-tables.js
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase configuration in .env.local');
  console.log('Required variables:');
  console.log('  - NEXT_PUBLIC_SUPABASE_URL');
  console.log('  - SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTables() {
  console.log('🔍 Checking Supabase database tables...\n');
  console.log(`URL: ${supabaseUrl}\n`);

  const tables = ['test_results', 'user_sessions', 'payments', 'feedback'];
  const results = {};

  for (const table of tables) {
    try {
      const { data, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        results[table] = { exists: false, error: error.message };
      } else {
        results[table] = { exists: true, count: data };
      }
    } catch (err) {
      results[table] = { exists: false, error: err.message };
    }
  }

  // Display results
  console.log('📊 Table Status:\n');
  let allExist = true;
  
  for (const [table, status] of Object.entries(results)) {
    if (status.exists) {
      console.log(`✅ ${table}: EXISTS (${status.count} rows)`);
    } else {
      console.log(`❌ ${table}: MISSING or ERROR - ${status.error}`);
      allExist = false;
    }
  }

  console.log('\n' + '='.repeat(50));
  
  if (allExist) {
    console.log('✅ All tables are created and ready!');
    console.log('\n📝 Next steps:');
    console.log('   1. Test the payment flow');
    console.log('   2. Verify order tracking works');
    console.log('   3. Deploy to production');
  } else {
    console.log('❌ Some tables are missing.');
    console.log('\n📝 Action required:');
    console.log('   1. Go to https://supabase.com/dashboard');
    console.log('   2. Select your project');
    console.log('   3. Go to SQL Editor');
    console.log('   4. Run the supabase-schema.sql script');
    console.log('\n💡 Alternatively, run this SQL in Supabase SQL Editor:');
    console.log('\n-- Enable UUID extension');
    console.log('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    console.log('\n-- Then create your tables...');
  }
}

checkTables().catch(console.error);
