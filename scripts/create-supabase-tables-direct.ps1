/**
 * Direct Supabase Database Setup via Management API
 * Uses Supabase Personal Access Token for authentication
 */

# Configuration - User needs to provide their PAT
$env:SUPABASE_ACCESS_TOKEN = ""  # User needs to set this
$env:SUPABASE_PROJECT_REF = "ywadfzwmuzmskerzzxgk"

# SQL statements to execute
$sqlStatements = @(
    "CREATE EXTENSION IF NOT EXISTS ""uuid-ossp"";",

    @"CREATE TABLE IF NOT EXISTS test_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    answers JSONB NOT NULL DEFAULT '[]',
    scores JSONB NOT NULL DEFAULT '{""secure"": 0, ""anxious"": 0, ""avoidant"": 0, ""disorganized"": 0}',
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
);"@,

    "CREATE INDEX IF NOT EXISTS idx_test_results_session_id ON test_results(session_id);",
    "CREATE INDEX IF NOT EXISTS idx_test_results_primary_style ON test_results(primary_style);",
    "CREATE INDEX IF NOT EXISTS idx_test_results_created_at ON test_results(created_at DESC);",

    @"CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_token TEXT UNIQUE NOT NULL,
    browser_info TEXT,
    referrer TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);"@,

    "CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);",

    @"CREATE TABLE IF NOT EXISTS payments (
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
);"@,

    "CREATE INDEX IF NOT EXISTS idx_payments_paypal_order_id ON payments(paypal_order_id);",
    "CREATE INDEX IF NOT EXISTS idx_payments_test_result_id ON payments(test_result_id);",

    @"CREATE TABLE IF NOT EXISTS feedback (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    test_result_id UUID REFERENCES test_results(id) ON DELETE SET NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);"@,

    @"CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;"@,

    "DROP TRIGGER IF EXISTS update_test_results_updated_at ON test_results;",
    "CREATE TRIGGER update_test_results_updated_at BEFORE UPDATE ON test_results FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();",

    "DROP TRIGGER IF EXISTS update_payments_updated_at ON payments;",
    "CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();",

    "DROP TRIGGER IF EXISTS update_user_sessions_last_active ON user_sessions;",
    "CREATE TRIGGER update_user_sessions_last_active BEFORE UPDATE ON user_sessions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();"
)

Write-Host "🚀 Supabase Database Setup" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

if ([string]::IsNullOrEmpty($env:SUPABASE_ACCESS_TOKEN)) {
    Write-Host "❌ Error: SUPABASE_ACCESS_TOKEN not set" -ForegroundColor Red
    Write-Host "`n📝 To set your Supabase Personal Access Token:" -ForegroundColor Yellow
    Write-Host "   1. Go to https://supabase.com/dashboard/account/tokens" -ForegroundColor White
    Write-Host "   2. Click 'New Token'" -ForegroundColor White
    Write-Host "   3. Copy the token and run:" -ForegroundColor White
    Write-Host '   $env:SUPABASE_ACCESS_TOKEN = "your-token-here"' -ForegroundColor Gray
    Write-Host "   4. Re-run this script`n" -ForegroundColor White
    exit 1
}

$headers = @{
    "Authorization" = "Bearer $env:SUPABASE_ACCESS_TOKEN"
    "Content-Type" = "application/json"
}

$projectRef = $env:SUPABASE_PROJECT_REF
$successCount = 0
$errorCount = 0

foreach ($sql in $sqlStatements) {
    try {
        $body = @{
            "query" = $sql
        } | ConvertTo-Json

        $response = Invoke-RestMethod -Uri "https://api.supabase.com/v1/projects/$projectRef/database/query" `
            -Method POST `
            -Headers $headers `
            -Body $body `
            -ContentType "application/json"

        $successCount++
        Write-Host "✅ " -NoNewline -ForegroundColor Green
        Write-Host ($sql.Substring(0, [Math]::Min(50, $sql.Length)) -replace "`n", " " -replace "`r", "") -ForegroundColor Gray
    }
    catch {
        $errorCount++
        Write-Host "❌ " -NoNewline -ForegroundColor Red
        Write-Host ($sql.Substring(0, [Math]::Min(50, $sql.Length)) -replace "`n", " " -replace "`r", "") -ForegroundColor Gray
        Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor DarkRed
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "📊 Results: $successCount succeeded, $errorCount failed" -ForegroundColor $(if ($errorCount -eq 0) { "Green" } else { "Yellow" })

if ($errorCount -eq 0) {
    Write-Host "`n✅ Database setup completed successfully!" -ForegroundColor Green
    Write-Host "`n📝 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. Test payment flow at http://localhost:3000" -ForegroundColor White
    Write-Host "   2. Verify order tracking works" -ForegroundColor White
    Write-Host "   3. Deploy to production`n" -ForegroundColor White
} else {
    Write-Host "`n⚠️  Some statements failed. Check errors above." -ForegroundColor Yellow
    Write-Host "`n💡 You can also run the SQL manually in:" -ForegroundColor Cyan
    Write-Host "   https://supabase.com/dashboard/project/$projectRef/sql/new`n" -ForegroundColor White
}
