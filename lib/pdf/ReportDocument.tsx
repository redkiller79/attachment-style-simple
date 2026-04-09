/**
 * BondType Premium PDF Report Template
 * 
 * Design: Professional, warm, science-backed
 * Colors: Deep blue primary, warm accents
 */

import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Use system Helvetica (no external font fetching needed)
// Font.register({
//   family: 'Inter',
//   fonts: [
//     { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2', fontWeight: 400 },
//     { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff2', fontWeight: 600 },
//     { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff2', fontWeight: 700 },
//   ],
// });

const colors = {
  primary: '#1e3a5f',      // Deep navy blue
  secondary: '#3b82f6',    // Bright blue
  accent: '#f59e0b',       // Warm amber
  success: '#10b981',      // Emerald green
  warning: '#ef4444',      // Red
  text: '#1f2937',         // Dark gray
  textLight: '#6b7280',    // Medium gray
  background: '#f8fafc',    // Light gray
  white: '#ffffff',
};

const styles = StyleSheet.create({
  // Page layout
  page: {
    backgroundColor: colors.white,
    padding: 0,
    fontFamily: 'Helvetica',
  },
  
  // Header
  header: {
    backgroundColor: colors.primary,
    padding: 40,
    marginBottom: 30,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.white,
  },
  logoSub: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  date: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'right',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  
  // Style badge
  styleBadge: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  styleBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 600,
    flexWrap: 'wrap',
  },
  
  // Content sections
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  
  // Section
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIcon: {
    fontSize: 10,
    marginRight: 8,
    color: colors.secondary,
    fontWeight: 600,
  },
  
  // Description box
  descriptionBox: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },
  descriptionText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: colors.text,
    flexWrap: 'wrap',
  },
  
  // Grid layouts
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
  },
  
  // List items
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingLeft: 4,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.secondary,
    marginTop: 5,
    marginRight: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: colors.text,
    flexWrap: 'wrap',
  },
  
  // Checkmark items
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  checkMark: {
    color: colors.success,
    fontSize: 12,
    marginRight: 8,
  },
  checkText: {
    fontSize: 10,
    color: colors.text,
    flexWrap: 'wrap',
  },
  
  // Arrow items
  arrowItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  arrowIcon: {
    color: colors.accent,
    fontSize: 12,
    marginRight: 8,
  },
  arrowText: {
    fontSize: 10,
    color: colors.text,
    flex: 1,
    flexWrap: 'wrap',
  },
  
  // AI Report section
  aiSection: {
    backgroundColor: '#f0f9ff',
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#bae6fd',
  },
  aiSectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: colors.primary,
    marginBottom: 12,
  },
  aiParagraph: {
    fontSize: 10,
    lineHeight: 1.6,
    color: colors.text,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  aiSubtitle: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.primary,
    marginTop: 12,
    marginBottom: 6,
  },
  
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 15,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: colors.textLight,
  },
  footerBadge: {
    backgroundColor: colors.accent,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  footerBadgeText: {
    color: colors.white,
    fontSize: 8,
    fontWeight: 600,
  },
  
  // Page numbers
  pageNumbers: {
    position: 'absolute',
    bottom: 30,
    right: 40,
  },
  pageNumber: {
    fontSize: 8,
    color: colors.textLight,
  },
  
  // Divider
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 20,
  },
  
  // Highlight box
  highlightBox: {
    backgroundColor: '#fffbeb',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fcd34d',
    marginTop: 12,
  },
  highlightTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: '#92400e',
    marginBottom: 8,
  },
  
  // Strength/Challenge badges
  strengthBadge: {
    backgroundColor: '#ecfdf5',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 6,
  },
  challengeBadge: {
    backgroundColor: '#fef2f2',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 6,
  },
});

interface ReportData {
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
  generatedAt?: string;
}

interface ReportDocumentProps {
  data: ReportData;
}

export function ReportDocument({ data }: ReportDocumentProps) {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.logo}>BondType</Text>
              <Text style={styles.logoSub}>Attachment Style Assessment</Text>
            </View>
            <View>
              <Text style={styles.date}>Report Date: {today}</Text>
            </View>
          </View>
          <Text style={styles.headerTitle}>Your Attachment Style Analysis</Text>
          <Text style={styles.headerSubtitle}>
            Comprehensive insights into your relationship patterns and emotional bonds
          </Text>
          <View style={styles.styleBadge}>
            <Text style={styles.styleBadgeText}>
              SECURE ATTACHMENT STYLE
            </Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Overview Section */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionIcon}>*</Text>
              <Text style={styles.sectionTitle}>Overview</Text>
            </View>
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>{data.description}</Text>
            </View>
          </View>

          {/* Key Characteristics */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionIcon}>*</Text>
              <Text style={styles.sectionTitle}>Key Characteristics</Text>
            </View>
            <View style={styles.twoColumn}>
              {data.characteristics.slice(0, Math.ceil(data.characteristics.length / 2)).map((item, i) => (
                <View key={i} style={styles.listItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
              {data.characteristics.slice(Math.ceil(data.characteristics.length / 2)).map((item, i) => (
                <View key={i} style={styles.listItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Strengths and Growth Areas */}
          <View style={styles.section}>
            <View style={styles.twoColumn}>
              {/* Strengths */}
              <View style={styles.column}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionIcon}>+</Text>
                  <Text style={styles.sectionTitle}>Your Strengths</Text>
                </View>
                {data.strengths.map((item, i) => (
                  <View key={i} style={styles.checkItem}>
                    <Text style={styles.checkMark}>✓</Text>
                    <Text style={styles.checkText}>{item}</Text>
                  </View>
                ))}
              </View>

              {/* Growth Areas */}
              <View style={styles.column}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionIcon}>{'->'}</Text>
                  <Text style={styles.sectionTitle}>Growth Areas</Text>
                </View>
                {data.growthAreas.map((item, i) => (
                  <View key={i} style={styles.arrowItem}>
                    <Text style={styles.arrowIcon}>-</Text>
                    <Text style={styles.arrowText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* AI Report (if available) */}
          {data.aiReport && (
            <View style={styles.aiSection}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionIcon}>AI</Text>
                <Text style={styles.aiSectionTitle}>AI-Powered Detailed Analysis</Text>
              </View>
              
              {data.aiReport.overview && (
                <>
                  <Text style={styles.aiParagraph}>{data.aiReport.overview}</Text>
                </>
              )}
              
              {data.aiReport.relationshipPatterns && (
                <>
                  <Text style={styles.aiSubtitle}>Relationship Patterns</Text>
                  <Text style={styles.aiParagraph}>{data.aiReport.relationshipPatterns}</Text>
                </>
              )}
              
              {data.aiReport.communication && (
                <>
                  <Text style={styles.aiSubtitle}>Communication Style</Text>
                  <Text style={styles.aiParagraph}>{data.aiReport.communication}</Text>
                </>
              )}
              
              {data.aiReport.challenges && (
                <>
                  <Text style={styles.aiSubtitle}>Common Challenges</Text>
                  <Text style={styles.aiParagraph}>{data.aiReport.challenges}</Text>
                </>
              )}
              
              {data.aiReport.recommendations && data.aiReport.recommendations.length > 0 && (
                <>
                  <Text style={styles.aiSubtitle}>Personalized Recommendations</Text>
                  {data.aiReport.recommendations.map((rec, i) => (
                    <View key={i} style={styles.checkItem}>
                      <Text style={styles.checkMark}>✓</Text>
                      <Text style={styles.checkText}>{rec}</Text>
                    </View>
                  ))}
                </>
              )}
            </View>
          )}

          {/* Highlight Box */}
          <View style={styles.highlightBox}>
            <Text style={styles.highlightTitle}>[i] Key Insight</Text>
            <Text style={styles.aiParagraph}>
              Understanding your attachment style is the first step toward building more secure, 
              fulfilling relationships. Your {data.style} attachment style influences how you 
              connect with others, communicate your needs, and respond to emotional situations.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>
              BondType (c) 2024 | Science-backed attachment theory assessment
            </Text>
            <View style={styles.footerBadge}>
              <Text style={styles.footerBadgeText}>CONFIDENTIAL</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ReportDocument;
