# Database Setup Instructions

## 1. Supabase Setup

The application uses Supabase for the database. You need to:

1. **Create a Supabase project** at https://supabase.com
2. **Get your credentials**:
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - Anon key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - Service role key (SUPABASE_SERVICE_ROLE_KEY)

3. **Add credentials to `.env.local`**:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

## 2. Database Schema

Run the SQL from `supabase-schema.sql` in your Supabase SQL Editor:

1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the entire contents of `supabase-schema.sql`
4. Click **Run**

This will create:
- `test_results` - Main test results table
- `quiz_responses` - Individual question answers
- `users` - User email collection
- `reports` - Premium reports
- `orders` - Payment orders
- `payments` - Payment records
- `feedback` - User feedback
- `user_sessions` - Session tracking

## 3. Test Database Connection

Run the test script to verify everything is working:

```bash
cd attachment-style-simple
node test-db-connection.js
```

Expected output:
```
✅ Database connection successful!
```

## 4. PayPal Setup (Optional for testing)

For payment testing, you need PayPal sandbox credentials:

1. **Create a PayPal Developer account** at https://developer.paypal.com
2. **Create a sandbox app** to get:
   - Client ID (PAYPAL_CLIENT_ID)
   - Client Secret (PAYPAL_CLIENT_SECRET)

3. **Add to `.env.local`**:
   ```
   PAYPAL_CLIENT_ID=your-client-id
   PAYPAL_CLIENT_SECRET=your-client-secret
   PAYPAL_ENVIRONMENT=sandbox
   ```

## 5. New Features Implemented

### Database Integration
- ✅ **Quiz responses saved in real-time** - Each answer is saved to `quiz_responses` table
- ✅ **Complete results saved** - Final scores and style saved to `test_results` and `reports`
- ✅ **Payment tracking** - Orders and payments linked to sessions
- ✅ **User management** - Email collection for PDF reports

### New API Routes
- `POST /api/quiz/save-response` - Save individual question answers
- `GET /api/quiz/save-response?sessionId=xxx` - Get all responses for a session
- `POST /api/quiz/save-result` - Save complete test result
- `GET /api/quiz/save-result?sessionId=xxx` - Get test result by session

### New Pages
- `/checkout` - Payment checkout page with plan selection

### Updated Components
- **AssessmentClient.tsx** - Now saves answers to database in real-time
- **ResultClient.tsx** - Now fetches from database as primary source
- **CheckoutClient.tsx** - New checkout flow with PayPal integration

## 6. Data Flow

1. **Quiz Start** → Generate session ID → Save to localStorage
2. **Each Answer** → Save to `quiz_responses` table via API
3. **Quiz Complete** → Calculate scores → Save to `test_results` and `reports`
4. **Payment** → Create order in `orders` → Process via PayPal
5. **Result View** → Fetch from database → Fallback to localStorage

## 7. Troubleshooting

### Database Connection Issues
1. Check `.env.local` credentials
2. Verify tables exist in Supabase
3. Run the test script: `node test-db-connection.js`

### Payment Issues
1. Check PayPal sandbox credentials
2. Verify webhook URL in PayPal dashboard
3. Check browser console for errors

### Quiz Not Saving
1. Check network tab for API call failures
2. Verify Supabase RLS policies allow public insert
3. Check console for JavaScript errors

## 8. Deployment

For production deployment:

1. **Update environment variables** in your hosting platform
2. **Set `PAYPAL_ENVIRONMENT=live`** for real payments
3. **Configure webhooks** in PayPal dashboard
4. **Set up email service** for PDF delivery
5. **Enable proper security** (CORS, rate limiting, etc.)