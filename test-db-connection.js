// Simple test to verify Supabase connection
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ywadfzwmuzmskerzzxgk.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Oq4EzFSe9P-w3Yki9ChUnA_vQmb-ZtL';

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);
console.log('Key (first 10 chars):', supabaseAnonKey?.substring(0, 10) + '...');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    // Test connection by querying a table
    const { data, error } = await supabase
      .from('test_results')
      .select('count')
      .limit(1);

    if (error) {
      console.error('❌ Database connection failed:', error.message);
      
      // Check if tables exist
      console.log('\nChecking if tables exist...');
      const { data: tables, error: tablesError } = await supabase
        .from('test_results')
        .select('*')
        .limit(0);
      
      if (tablesError && tablesError.code === '42P01') {
        console.log('⚠️  Table "test_results" does not exist. You need to run the SQL schema.');
        console.log('Run the SQL from supabase-schema.sql in your Supabase dashboard.');
      }
      
      process.exit(1);
    }
    
    console.log('✅ Database connection successful!');
    console.log('Data:', data);
    
    // List tables
    console.log('\nChecking available tables...');
    const { data: testData, error: testError } = await supabase
      .from('test_results')
      .select('*')
      .limit(5);
    
    if (!testError && testData) {
      console.log(`Found ${testData.length} test results`);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

testConnection();