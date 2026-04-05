import { NextRequest, NextResponse } from 'next/server';
import { deepseekClient } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { attachmentStyle, characteristics, strengths, growthAreas } = body;

    if (!attachmentStyle) {
      return NextResponse.json({ error: 'Missing attachment style data' }, { status: 400 });
    }

    const prompt = `You are an AI assistant for bondtype.com, an attachment style assessment platform.
Based on the following attachment style test results, generate 3-5 concise bullet-point summaries.

Attachment Style: ${attachmentStyle}
Characteristics: ${characteristics?.join(', ') || 'N/A'}
Strengths: ${strengths?.join(', ') || 'N/A'}
Growth Areas: ${growthAreas?.join(', ') || 'N/A'}

Please provide 3-5 short, actionable summaries (1-2 sentences each) about this attachment style.
Format as a JSON array with a "summaries" key containing strings.`;

    const response = await deepseekClient.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant specializing in attachment styles and relationship psychology.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content || '';

    // Try to parse as JSON
    let summaries: string[] = [];
    try {
      const parsed = JSON.parse(content);
      summaries = parsed.summaries || parsed;
    } catch {
      // If not JSON, split by newlines
      summaries = content
        .split('\n')
        .map((line: string) => line.replace(/^[-•\d.]\s*/, '').trim())
        .filter((line: string) => line.length > 10);
    }

    return NextResponse.json({ summaries });
  } catch (error: unknown) {
    console.error('DeepSeek summarize error:', error);
    return NextResponse.json(
      { error: 'Failed to generate summary', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
