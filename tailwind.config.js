/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#0a0a0f',
        'cosmic-navy': '#0D1B2A',
        'nebula-purple': '#5B4B8A',
        'aurora-teal': '#2DD4BF',
        'solar-gold': '#F59E0B',
        'stellar-white': '#F8FAFC',
      },
      fontFamily: {
        'cosmic-heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'cosmic-accent': ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
