// 定价配置 - 统一价格常量
// Basic Report: $14.99
// Complete Report + AI: $24.99 (锚定原价 $49.99 折扣)

export const PRICING = {
  BASIC: {
    id: 'basic_plan',
    name: 'Basic Report',
    price: 14.99,
    originalPrice: 14.99,
    currency: 'USD',
    description: 'Complete attachment style analysis with personalized insights',
  },
  COMPLETE: {
    id: 'complete_plan',
    name: 'Complete Report + AI',
    price: 24.99,
    originalPrice: 49.99,
    currency: 'USD',
    description: 'Full 36-question assessment with complete attachment profile, PDF report, and AI-powered insights',
  },
};

// For backward compatibility with code referencing BASIC/COMPLETE as planIds
export const PLAN_IDS = {
  BASIC: 'BASIC',
  COMPLETE: 'COMPLETE',
} as const;
