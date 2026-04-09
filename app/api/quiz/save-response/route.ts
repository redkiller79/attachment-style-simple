import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

/**
 * POST /api/quiz/save-response
 * 
 * Saves individual quiz responses to the database.
 * This allows tracking each answer and enables resuming quizzes.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, questionId, answer } = body;

    if (!sessionId || !questionId || answer === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: sessionId, questionId, answer' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      );
    }

    // Save the response
    const { data, error } = await supabase
      .from('quiz_responses')
      .insert({
        session_id: sessionId,
        question_id: questionId,
        answer: answer
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving quiz response:', error);
      return NextResponse.json(
        { error: 'Failed to save response' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      responseId: data.id,
      sessionId,
      questionId,
      answer
    });

  } catch (error: any) {
    console.error('Quiz save response error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save response' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/quiz/save-response?sessionId=xxx
 * 
 * Retrieves all quiz responses for a session.
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'sessionId query parameter is required' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from('quiz_responses')
      .select('*')
      .eq('session_id', sessionId)
      .order('question_id', { ascending: true });

    if (error) {
      console.error('Error fetching quiz responses:', error);
      return NextResponse.json(
        { error: 'Failed to fetch responses' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      sessionId,
      responses: data,
      count: data.length
    });

  } catch (error: any) {
    console.error('Quiz get responses error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch responses' },
      { status: 500 }
    );
  }
}