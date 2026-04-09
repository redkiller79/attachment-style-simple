# Design System: Linear-inspired for BondType

## 1. Visual Theme & Atmosphere

BondType的Linear风格暗色设计系统 — 简洁、信任感强、适合心理学测试产品。

**核心特点：**
- 暗色原生：`#08090a` 营销背景
- 品牌紫罗兰色强调：`#5e6ad2` / `#7170ff`
- 超细半透明边框
- Inter字体家族

---

## 2. Color Palette & Roles

### Background Surfaces
- **Marketing Black**: `#08090a` — 英雄区域背景
- **Panel Dark**: `#0f1011` — 侧边栏和面板背景
- **Level 3 Surface**: `#191a1b` — 卡片背景、下拉菜单
- **Secondary Surface**: `#28282c` — 悬停状态

### Text & Content
- **Primary Text**: `#f7f8f8` — 主要文本（不完全白，防眼疲劳）
- **Secondary Text**: `#d0d6e0` — 银色灰用于正文
- **Tertiary Text**: `#8a8f98` — 占位符、元数据
- **Quaternary Text**: `#62666d` — 时间戳、禁用状态

### Brand & Accent
- **Brand Indigo**: `#5e6ad2` — CTA按钮背景
- **Accent Violet**: `#7170ff` — 交互元素、链接
- **Accent Hover**: `#828fff` — 悬停状态

### Borders
- **Border Subtle**: `rgba(255,255,255,0.05)` — 默认
- **Border Standard**: `rgba(255,255,255,0.08)` — 卡片、输入框

---

## 3. Typography Rules

### Font Family
- **Primary**: Inter Variable
- **Fallback**: SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto

### Hierarchy
| Role | Size | Weight | Letter Spacing |
|------|------|--------|----------------|
| Display XL | 72px | 510 | -1.584px |
| Display Large | 64px | 510 | -1.408px |
| Display | 48px | 510 | -1.056px |
| Heading 1 | 32px | 400 | -0.704px |
| Heading 2 | 24px | 400 | -0.288px |
| Body Large | 18px | 400 | -0.165px |
| Body | 16px | 400 | normal |
| Body Medium | 16px | 510 | normal |
| Small | 15px | 400 | -0.165px |
| Caption | 13px | 400-510 | -0.13px |

---

## 4. Component Stylings

### Buttons

**Ghost Button (Default)**
- Background: `rgba(255,255,255,0.02)`
- Text: `#e2e4e7`
- Border: `1px solid rgb(36, 40, 44)`
- Radius: 6px

**Primary Brand Button**
- Background: `#5e6ad2`
- Text: `#ffffff`
- Hover: `#828fff`
- Radius: 6px

### Cards & Containers
- Background: `rgba(255,255,255,0.02)` to `rgba(255,255,255,0.05)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: 8px (标准), 12px (特色)

### Inputs & Forms
- Background: `rgba(255,255,255,0.02)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Text: `#d0d6e0`
- Radius: 6px

### Badges & Pills
- Background: transparent
- Border: `1px solid rgb(35, 37, 42)`
- Radius: 9999px (pill)

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Primary rhythm: 8px, 16px, 24px, 32px

### Grid & Container
- Max content width: 1200px
- Hero: centered single-column
- Feature sections: 2-3 column grids

---

## 6. Do's and Don'ts

### Do
- 使用Inter字体
- 使用`#f7f8f8`作为主要文本（不完全白）
- 使用半透明白色边框
- 品牌紫色只用于CTA和交互元素

### Don't
- 不要使用纯白色`#ffffff`作为主要文本
- 不要在按钮上使用实色背景
- 不要在显示文本上使用正字母间距
- 不要使用重量700（bold）— 最大是590

---

*Based on Linear's design system, adapted for BondType*
