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
        'q-orange': '#FF6B35',
        'q-magenta': '#E91E63',
        'q-purple': '#9C27B0',
        'dark-bg': '#0A0A0F',
        'dark-card': '#1A1A2E',
        'dark-surface': '#16213E',
        'glow-orange': '#FF8A65',
        'glow-magenta': '#F06292',
        'glow-purple': '#BA68C8',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #FF6B35, 0 0 20px #FF6B35, 0 0 30px #FF6B35' },
          '100%': { boxShadow: '0 0 20px #FF6B35, 0 0 40px #FF6B35, 0 0 60px #FF6B35' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 10px #E91E63, 0 0 20px #E91E63, 0 0 30px #E91E63',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px #E91E63, 0 0 50px #E91E63, 0 0 70px #E91E63',
            transform: 'scale(1.02)'
          },
        },
      },
    },
  },
  plugins: [],
} 