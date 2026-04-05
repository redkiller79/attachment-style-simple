import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@/lib/mailchimp';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    const listId = process.env.MAILCHIMP_LIST_ID;

    if (!listId || listId === 'your_list_id') {
      // In development without a real list ID, return a mock success
      console.warn('MAILCHIMP_LIST_ID not configured. Returning mock success.');
      return NextResponse.json(
        { message: 'Successfully subscribed! (mock — list ID not configured)' },
        { status: 200 }
      );
    }

    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    });

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Mailchimp subscription error:', error);

    // Handle already subscribed member
    if (
      error &&
      typeof error === 'object' &&
      'response' in error &&
      (error as { response: { text: string } }).response?.text
    ) {
      const responseText = (error as { response: { text: string } }).response.text;
      if (responseText.includes('Member Exists')) {
        return NextResponse.json(
          { error: 'This email is already subscribed!' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Subscription failed. Please try again.' },
      { status: 500 }
    );
  }
}
