import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

interface TestResultRequest {
  sessionId: string;
  answers: number[];
  scores: {
    secure: number;
    anxious: number;
    avoidant: number;
    disorganized: number;
  };
  primaryStyle: string;
  secondaryStyle?: string;
  reportType?: 'basic' | 'complete';
}

/**
 * POST /api/quiz/save-result
 * 
 * Saves the complete test result to the database.
 * This should be called when the assessment is completed.
 */
export async function POST(request: NextRequest) {
  try {
    const body: TestResultRequest = await request.json();
    const { 
      sessionId, 
      answers, 
      scores, 
      primaryStyle, 
      secondaryStyle, 
      reportType = 'basic' 
    } = body;

    if (!sessionId || !answers || !scores || !primaryStyle) {
      return NextResponse.json(
        { error: 'Missing required fields: sessionId, answers, scores, primaryStyle' },
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

    // First, save to test_results table (existing schema)
    const { data: testResult, error: testError } = await supabase
      .from('test_results')
      .insert({
        session_id: sessionId,
        answers: answers,
        scores: scores,
        primary_style: primaryStyle,
        secondary_style: secondaryStyle,
        report_type: reportType,
        payment_status: 'pending'
      })
      .select()
      .single();

    if (testError) {
      console.error('Error saving test result:', testError);
      return NextResponse.json(
        { error: 'Failed to save test result' },
        { status: 500 }
      );
    }

    // Also save to reports table (new schema)
    const { data: report, error: reportError } = await supabase
      .from('reports')
      .insert({
        session_id: sessionId,
        attachment_type: primaryStyle,
        scores: scores,
        premium_unlocked: reportType === 'complete'
      })
      .select()
      .single();

    if (reportError) {
      console.error('Error saving report:', reportError);
      // Continue anyway - the test_result is more important
    }

    return NextResponse.json({
      success: true,
      testResultId: testResult.id,
      reportId: report?.id,
      sessionId,
      primaryStyle,
      scores,
      reportType
    });

  } catch (error: any) {
    console.error('Quiz save result error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save result' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/quiz/save-result?sessionId=xxx
 * 
 * Retrieves a test result by session ID.
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

    // Get the latest test result for this session
    const { data, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching test result:', error);
      return NextResponse.json(
        { error: 'Test result not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      testResult: data
    });

  } catch (error: any) {
    console.error('Quiz get result error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch result' },
      { status: 500 }
    );
  }
}