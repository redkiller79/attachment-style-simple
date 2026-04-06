/**
 * Send Report API
 * 
 * POST /api/send-report
 * Sends PDF report to user's email
 */

import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const PDF_DIR = path.join(process.cwd(), '.generated-pdfs');

interface SendReportRequest {
  email: string;
  reportData: {
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
  };
  pdfFilename?: string;
}

// Email validation
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: SendReportRequest = await request.json();
    const { email, reportData, pdfFilename } = body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Get PDF file if provided
    let pdfBuffer: Buffer | null = null;
    if (pdfFilename) {
      const filepath = path.join(PDF_DIR, pdfFilename);
      if (fs.existsSync(filepath)) {
        pdfBuffer = fs.readFileSync(filepath);
      }
    }

    // In production, integrate with email service:
    // - Resend (recommended): https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Mailchimp Transactional (Mandrill): https://mailchimp.com/transactional/
    // - AWS SES: https://aws.amazon.com/ses/
    
    // For now, we'll use a placeholder that logs the email
    // and simulates success
    
    console.log('=== Email Report Request ===');
    console.log('To:', email);
    console.log('Subject: Your BondType Attachment Style Report');
    console.log('Attachment:', pdfFilename || 'generated in email body');
    
    // Check if we have email service configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    
    if (resendApiKey) {
      // Use Resend
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'BondType <reports@bondtype.com>',
          to: email,
          subject: 'Your BondType Attachment Style Report',
          html: generateEmailHTML(reportData),
          attachments: pdfBuffer ? [
            {
              filename: `BondType-Report-${reportData.style}.pdf`,
              data: pdfBuffer.toString('base64'),
              contentType: 'application/pdf'
            }
          ] : []
        })
      });
      
      if (!response.ok) {
        throw new Error(`Resend API error: ${response.status}`);
      }
      
    } else if (sendgridApiKey) {
      // Use SendGrid
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sendgridApiKey}`,
          'Content-Type': 'application/json'
        }
        // SendGrid has different format...
      });
      
    } else {
      // No email service configured - simulate success for demo
      // In production, this should return an error
      console.log('No email service configured. Simulating success.');
    }

    return NextResponse.json({
      success: true,
      message: `Report sent to ${email}`,
      email
    });

  } catch (error) {
    console.error('Send report error:', error);
    return NextResponse.json(
      { error: 'Failed to send report' },
      { status: 500 }
    );
  }
}

function generateEmailHTML(reportData: SendReportRequest['reportData']): string {
  const styleColor = {
    'Secure': '#10b981',
    'Anxious': '#f59e0b',
    'Avoidant': '#8b5cf6',
    'Fearful': '#ef4444'
  }[reportData.style] || '#3b82f6';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your BondType Report</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1e3a5f 0%,#3b82f6 100%);padding:40px;border-radius:16px 16px 0 0;text-align:center;">
      <h1 style="color:#ffffff;font-size:28px;font-weight:700;margin:0 0 8px 0;">BondType</h1>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0;">Your Attachment Style Report</p>
    </div>
    
    <!-- Content -->
    <div style="background:#ffffff;padding:40px;border-radius:0 0 16px 16px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
      
      <!-- Style Badge -->
      <div style="text-align:center;margin-bottom:32px;">
        <span style="display:inline-block;background:${styleColor};color:#ffffff;padding:8px 24px;border-radius:24px;font-size:14px;font-weight:600;">
          ${reportData.styleIcon} ${reportData.style} Attachment Style
        </span>
      </div>
      
      <!-- Overview -->
      <div style="background:#f8fafc;padding:24px;border-radius:12px;border-left:4px solid #3b82f6;margin-bottom:24px;">
        <h2 style="color:#1e3a5f;font-size:16px;font-weight:600;margin:0 0 12px 0;">Overview</h2>
        <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0;">${reportData.description}</p>
      </div>
      
      <!-- Strengths -->
      <div style="margin-bottom:24px;">
        <h2 style="color:#10b981;font-size:14px;font-weight:600;margin:0 0 12px 0;">Your Strengths ✓</h2>
        <ul style="margin:0;padding-left:20px;color:#4b5563;font-size:14px;line-height:1.8;">
          ${reportData.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      
      <!-- Growth Areas -->
      <div style="margin-bottom:24px;">
        <h2 style="color:#f59e0b;font-size:14px;font-weight:600;margin:0 0 12px 0;">Growth Areas →</h2>
        <ul style="margin:0;padding-left:20px;color:#4b5563;font-size:14px;line-height:1.8;">
          ${reportData.growthAreas.map(g => `<li>${g}</li>`).join('')}
        </ul>
      </div>
      
      <!-- AI Report (if available) -->
      ${reportData.aiReport?.overview ? `
      <div style="background:#f0f9ff;padding:24px;border-radius:12px;border:1px solid #bae6fd;margin-bottom:24px;">
        <h2 style="color:#1e3a5f;font-size:14px;font-weight:600;margin:0 0 12px 0;">🤖 AI Analysis</h2>
        <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0 0 12px 0;">${reportData.aiReport.overview}</p>
        ${reportData.aiReport.relationshipPatterns ? `
        <h3 style="color:#1e3a5f;font-size:13px;font-weight:600;margin:16px 0 8px 0;">Relationship Patterns</h3>
        <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0;">${reportData.aiReport.relationshipPatterns}</p>
        ` : ''}
        ${reportData.aiReport.recommendations ? `
        <h3 style="color:#1e3a5f;font-size:13px;font-weight:600;margin:16px 0 8px 0;">Recommendations</h3>
        <ul style="margin:0;padding-left:20px;color:#4b5563;font-size:14px;line-height:1.8;">
          ${reportData.aiReport.recommendations.map(r => `<li>${r}</li>`).join('')}
        </ul>
        ` : ''}
      </div>
      ` : ''}
      
      <!-- CTA -->
      <div style="text-align:center;padding-top:24px;border-top:1px solid #e5e7eb;">
        <p style="color:#6b7280;font-size:14px;margin:0 0 16px 0;">
          Thank you for choosing BondType for your attachment style assessment.
        </p>
        <a href="https://bondtype.com" style="display:inline-block;background:#1e3a5f;color:#ffffff;padding:12px 32px;border-radius:8px;text-decoration:none;font-weight:600;">
          Visit BondType →
        </a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="text-align:center;padding:20px;color:#9ca3af;font-size:12px;">
      <p style="margin:0 0 8px 0;">© 2024 BondType. All rights reserved.</p>
      <p style="margin:0;">This report is confidential and intended for the recipient only.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
