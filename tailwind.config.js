/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        background: '#06080D',
        surface: {
          50: '#06080D',
          100: '#0D1017',
          200: '#151922',
          300: '#1C2130',
          400: '#252B3B',
          800: '#06080D',
          850: '#0D1017',
          900: '#151922',
          950: '#1C2130',
        },
        border: {
          subtle: 'rgba(255,255,255,0.04)',
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.15)',
        },
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          blue: '#2563EB',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
          info: '#3B82F6',
        },
      },
      boxShadow: {
        'glow-brand': '0 0 30px -5px rgba(6, 182, 212, 0.2)',
        'glow-blue': '0 0 30px -5px rgba(37, 99, 235, 0.2)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.2)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'glow-ring': '0 0 60px -10px rgba(6, 182, 212, 0.15), 0 0 20px -5px rgba(139, 92, 246, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delayed': 'fadeUp 0.6s ease-out 0.15s forwards',
        'particle-drift-1': 'particleDrift1 20s linear infinite',
        'particle-drift-2': 'particleDrift2 25s linear infinite',
        'particle-drift-3': 'particleDrift3 30s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        particleDrift1: {
          '0%': { transform: 'translateY(100vh) translateX(0)' },
          '100%': { transform: 'translateY(-10vh) translateX(50px)' },
        },
        particleDrift2: {
          '0%': { transform: 'translateY(100vh) translateX(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-10vh) translateX(-30px) rotate(180deg)' },
        },
        particleDrift3: {
          '0%': { transform: 'translateY(100vh) translateX(0)' },
          '100%': { transform: 'translateY(-10vh) translateX(20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #06B6D4, #2563EB, #8B5CF6)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15), rgba(139,92,246,0.15))',
      },
    },
  },
  plugins: [],
};
