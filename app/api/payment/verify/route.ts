import { NextRequest, NextResponse } from 'next/server';

// This endpoint is called on mount to verify unlock status server-side.
// In production with a database, this would check for a completed payment record.
// The client should NOT be able to fake this — hence we return false until
// the server has a real payment record to validate against.

export async function POST(request: NextRequest) {
  try {
    // Real implementation would:
    // 1. Get user session (cookie/auth token)
    // 2. Query database for completed COMPLETE plan purchase
    // 3. Return { unlocked: true/false }
    //
    // Since this app has no database, we check for a completed order
    // by looking at PayPal capture records. The capture-order endpoint
    // is the authoritative gate — this verify endpoint is a placeholder
    // that returns false (requiring server-trusted payment flow).
    //
    // The PayPal flow is:
    //   create-order → PayPal approves → capture-order (server verifies with PayPal) → localStorage set
    // A user cannot fake the PayPal approval step.
    return NextResponse.json({ unlocked: false });
  } catch {
    return NextResponse.json({ unlocked: false });
  }
}
