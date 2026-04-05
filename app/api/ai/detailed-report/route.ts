import { NextRequest, NextResponse } from 'next/server';
import { kimiClient } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { attachmentStyle, characteristics, strengths, growthAreas } = body;

    if (!attachmentStyle) {
      return NextResponse.json({ error: 'Missing attachment style data' }, { status: 400 });
    }

    const prompt = `You are an AI assistant for bondtype.com, an attachment style assessment platform.
Based on the following attachment style test results, generate a comprehensive detailed report.

Attachment Style: ${attachmentStyle}
Characteristics: ${characteristics?.join(', ') || 'N/A'}
Strengths: ${strengths?.join(', ') || 'N/A'}
Growth Areas: ${growthAreas?.join(', ') || 'N/A'}

Please provide a detailed, well-structured report including:
1. An overview of this attachment style
2. How this style manifests in relationships
3. Communication patterns
4. Common challenges
5. Specific, actionable recommendations for growth
6. Compatible relationship dynamics

Format as a JSON object with the following keys: overview, relationshipPatterns, communication, challenges, recommendations (array), compatibleDynamics.
Use clear, empathetic language suitable for someone seeking self-understanding.`;

    const response = await kimiClient.chat.completions.create({
      model: 'moonshot-v1-8k',
      messages: [
        {
          role: 'system',
          content: 'You are a knowledgeable and empathetic AI assistant specializing in attachment styles and relationship psychology.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content || '';

    // Try to parse as JSON
    let report = { overview: content };
    try {
      report = JSON.parse(content);
    } catch {
      // If not JSON, wrap the content
      report = { overview: content };
    }

    return NextResponse.json({ report });
  } catch (error: unknown) {
    console.error('Kimi detailed report error:', error);
    return NextResponse.json(
      { error: 'Failed to generate detailed report', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
