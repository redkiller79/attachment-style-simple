'use client';
import React from 'react';
import { logoColors } from '@/lib/logoColors';

interface Props {
  size?: number;
  showText?: boolean;
  variant?: 'dark' | 'light';
}

export function BondLinkLogo({ size = 48, showText = true, variant = 'dark' }: Props) {
  const textColor = variant === 'dark' ? logoColors.slate : '#FFFFFF';
  const iconSize = size;
  const iconStroke = Math.max(2, iconSize / 16);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        {/* Link 1 - top left */}
        <rect
          x="8" y="14" width="20" height="12" rx="6"
          stroke="url(#linkGradient)"
          strokeWidth={iconStroke}
          fill="none"
          transform="rotate(-30 18 20)"
        />
        {/* Link 2 - bottom right */}
        <rect
          x="20" y="22" width="20" height="12" rx="6"
          stroke="url(#linkGradient)"
          strokeWidth={iconStroke}
          fill="none"
          transform="rotate(-30 30 28)"
        />
      </svg>
      {showText && (
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: size * 0.5,
          fontWeight: 700,
          color: textColor,
          letterSpacing: '-0.02em',
        }}>
          bond<span style={{ fontWeight: 500 }}>type</span>
        </span>
      )}
    </div>
  );
}
