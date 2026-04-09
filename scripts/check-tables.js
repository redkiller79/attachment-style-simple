const https = require('https');

const PROJECT_REF = 'ywadfzwmuzmskerzzxgk';
const SERVICE_KEY = 'sbp_e84bfa5dc73b633def3027c126d57cbbfba24033';

const query = `SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename`;

const data = JSON.stringify({ query });

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

console.log('🔍 Checking tables via Management API...\n');

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}\n`);
    
    try {
      const result = JSON.parse(body);
      
      if (Array.isArray(result)) {
        console.log('📋 Existing tables:');
        result.forEach(row => {
          console.log(`  ✅ ${row.tablename}`);
        });
        
        if (result.length === 0) {
          console.log('⚠️  No tables found - they may not have been created');
        } else {
          console.log(`\n✅ Found ${result.length} table(s)`);
        }
      } else if (result.error) {
        console.log(`❌ Error: ${JSON.stringify(result.error)}`);
      } else {
        console.log('Response:', body);
      }
    } catch (e) {
      console.log('Raw response:', body);
    }
  });
});

req.on('error', err => console.error('Request error:', err));
req.write(data);
req.end();
