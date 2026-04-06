'use client';

import { useState } from 'react';

interface EmailFormModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export function EmailFormModal({ isOpen, onClose, reportData, pdfFilename }: EmailFormModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setError(null);
    setLoading(true);
    
    try {
      const response = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          reportData,
          pdfFilename
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send report');
      }
      
      setSuccess(true);
      
      // Auto close after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setEmail('');
      }, 2000);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">📧 Send PDF to Email</h2>
              <p className="text-blue-100 text-sm mt-1">Get your report as a beautifully designed PDF</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl leading-none"
            >
              ×
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sent!</h3>
              <p className="text-gray-600">Check your inbox for the PDF report.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  disabled={loading}
                />
                <p className="text-xs text-gray-500 mt-2">
                  We'll send the PDF report to this email address.
                </p>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm">
                  ❌ {error}
                </div>
              )}
              
              {/* Preview */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <span className="text-2xl">📄</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">BondType Report</p>
                    <p className="text-sm text-gray-500">{reportData.styleIcon} {reportData.style} Attachment Style</p>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span> Sending...
                  </span>
                ) : (
                  'Send PDF Report'
                )}
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                By submitting, you agree to receive this report via email.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailFormModal;
