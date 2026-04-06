// 定价配置 - 纯静态配置，不需要 API credentials
// 可以安全地在客户端组件中使用

export const PRICING = {
  BASIC: {
    id: 'basic_report',
    name: 'Basic Report',
    price: 12.00,
    currency: 'USD',
    description: 'Basic attachment style analysis with personalized insights',
  },
  PREMIUM: {
    id: 'premium_report',
    name: 'Premium Report',
    price: 15.00,
    currency: 'USD',
    description: 'Comprehensive report with relationship recommendations',
  },
  COMPLETE: {
    id: 'complete_report',
    name: 'Complete Report',
    price: 9.99,
    currency: 'USD',
    description: 'Full 36-question assessment with complete attachment profile and PDF report',
  },
  DETAILED_REPORT: {
    id: 'detailed_report',
    name: 'Detailed Report',
    price: 6.99,
    currency: 'USD',
    description: 'AI-powered detailed analysis with relationship patterns and recommendations',
  },
};
