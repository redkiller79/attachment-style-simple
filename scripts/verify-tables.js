/**
 * Verify Supabase Tables Created
 */

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ywadfzwmuzmskerzzxgk.supabase.co';
const supabaseKey = 'sbp_e84bfa5dc73b633def3027c126d57cbbfba24033';

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
  console.log('🔍 Verifying Supabase tables...\n');

  const tables = ['test_results', 'user_sessions', 'payments', 'feedback'];

  for (const table of tables) {
    try {
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.log(`❌ ${table}: ERROR - ${error.message}`);
      } else {
        console.log(`✅ ${table}: EXISTS (${count || 0} rows)`);
      }
    } catch (err) {
      console.log(`❌ ${table}: ERROR - ${err.message}`);
    }
  }

  console.log('\n🎉 Database verification complete!');
}

verify().catch(console.error);
