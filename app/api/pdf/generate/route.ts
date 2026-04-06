/**
 * PDF Generation API
 * 
 * POST /api/pdf/generate
 * Generates PDF report and returns URL
 */

import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

// Dynamic import for React PDF (JSX support)
async function generatePDF(data: any): Promise<Buffer> {
  const { renderToBuffer } = await import('@react-pdf/renderer');
  const { ReportDocument } = await import('@/lib/pdf/ReportDocument');
  return renderToBuffer(ReportDocument({ data }));
}

// Simple cache
const pdfCache = new Map<string, { buffer: Buffer; createdAt: number }>();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

// Ensure PDF directory exists
const PDF_DIR = path.join(process.cwd(), '.generated-pdfs');
if (!fs.existsSync(PDF_DIR)) {
  fs.mkdirSync(PDF_DIR, { recursive: true });
}

interface GenerateRequest {
  style: string;
  styleIcon: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  growthAreas: string[];
  aiReport?: {
    overview?: string;
    relationshipPatterns?: string;
    communication?: string;
    challenges?: string;
    recommendations?: string[];
    compatibleDynamics?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();

    if (!body.style || !body.description) {
      return NextResponse.json(
        { error: 'Missing required fields: style, description' },
        { status: 400 }
      );
    }

    // Generate cache key from content
    const contentHash = Buffer.from(JSON.stringify(body)).toString('base64').substring(0, 32);
    
    // Check cache
    const cached = pdfCache.get(contentHash);
    if (cached && Date.now() - cached.createdAt < CACHE_TTL) {
      return NextResponse.json({
        success: true,
        cached: true,
        filename: cached.buffer.length > 0 ? `report-${contentHash}.pdf` : null,
        message: 'PDF already generated'
      });
    }

    // Generate PDF
    const pdfBuffer = await generatePDF(body);

    // Save to disk
    const filename = `report-${contentHash}.pdf`;
    const filepath = path.join(PDF_DIR, filename);
    fs.writeFileSync(filepath, pdfBuffer);

    // Cache in memory
    pdfCache.set(contentHash, {
      buffer: pdfBuffer,
      createdAt: Date.now()
    });

    // Clean old files
    cleanOldFiles();

    return NextResponse.json({
      success: true,
      filename,
      message: 'PDF generated successfully'
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}

// Clean PDF files older than 1 hour
function cleanOldFiles() {
  try {
    const files = fs.readdirSync(PDF_DIR);
    const now = Date.now();
    
    for (const file of files) {
      const filepath = path.join(PDF_DIR, file);
      try {
        const stats = fs.statSync(filepath);
        if (now - stats.mtimeMs > CACHE_TTL) {
          fs.unlinkSync(filepath);
        }
      } catch (e) {
        // Ignore file errors
      }
    }
    
    // Also limit total files
    const allFiles = fs.readdirSync(PDF_DIR)
      .filter(f => f.endsWith('.pdf'))
      .map(f => {
        try {
          return { name: f, time: fs.statSync(path.join(PDF_DIR, f)).mtimeMs };
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .sort((a, b) => (a?.time || 0) - (b?.time || 0)) as { name: string; time: number }[];
    
    if (allFiles.length > 50) {
      const toDelete = allFiles.slice(0, allFiles.length - 50);
      for (const f of toDelete) {
        try {
          fs.unlinkSync(path.join(PDF_DIR, f.name));
        } catch (e) {
          // Ignore
        }
      }
    }
  } catch (e) {
    // Ignore cleanup errors
  }
}

// GET endpoint to download PDF
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('file');

  if (!filename) {
    return NextResponse.json({ error: 'Missing file parameter' }, { status: 400 });
  }

  const filepath = path.join(PDF_DIR, filename);
  
  if (!fs.existsSync(filepath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const buffer = fs.readFileSync(filepath);
  
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
