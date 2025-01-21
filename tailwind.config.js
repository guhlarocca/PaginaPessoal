/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        space: {
          dark: "#0a192f",
          light: "#112240",
          lighter: "#233554",
        },
        cosmic: {
          purple: "#8b5cf6",
          pink: "#ec4899",
          blue: "#0ea5e9",
        },
        starlight: {
          bright: "#ccd6f6",
          dim: "#8892b0",
          faint: "#495670",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right, #8b5cf6, #ec4899)',
        'space-gradient': 'linear-gradient(to bottom, #0a192f, #112240)',
      },
      boxShadow: {
        'cosmic': '0 0 20px rgba(139, 92, 246, 0.2)',
        'cosmic-hover': '0 0 30px rgba(139, 92, 246, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'cosmic-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '100%' },
          '50%': { opacity: '40%' },
        },
        'effect-one': {
          'from': { boxShadow: '0 0 250px 20px #473C78' },
          'to': { boxShadow: '0 0 100px 15px #F72A3B' }
        },
        'effect-two': {
          'from': { boxShadow: '0 0 250px 20px #18C499' },
          'to': { boxShadow: '0 0 100px 15px #D8F05E' }
        },
        'effect-three': {
          'from': { boxShadow: '0 0 250px 20px #FFDD00' },
          'to': { boxShadow: '0 0 100px 15px #3E33FF' }
        },
        'effect-four': {
          'from': { boxShadow: '0 0 250px 20px #781848' },
          'to': { boxShadow: '0 0 100px 15px #F2BBE9' }
        },
        'effect-five': {
          'from': { boxShadow: '0 0 250px 20px #42F2A1' },
          'to': { boxShadow: '0 0 100px 15px #F4F6AD' }
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'cosmic-pulse': 'cosmic-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'effect-one': 'effect-one 5s ease-in-out infinite alternate',
        'effect-two': 'effect-two 4s ease-in-out infinite alternate',
        'effect-three': 'effect-three 3s ease-in-out infinite alternate',
        'effect-four': 'effect-four 2s ease-in-out infinite alternate',
        'effect-five': 'effect-five 1s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
      },
      height: {
        'section': 'max(100vh, 700px)',
        'section-lg': 'max(80vh, 700px)',
      },
      minHeight: {
        'section': 'max(100vh, 700px)',
        'section-lg': 'max(80vh, 700px)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}