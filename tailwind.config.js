/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
      spacing: {
        'section': '24px',
        'internal': '16px',
      },
      transitionDuration: {
        '300': '300ms',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "gradient-border": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-10px, 10px)" },
        },
        "gradient-1": {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-20px, 20px)" },
          "100%": { transform: "translate(-40px, 40px)" },
        },
        "gradient-2": {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(20px, -20px)" },
          "100%": { transform: "translate(40px, -40px)" },
        },
        "gradient-3": {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-20px, -20px)" },
          "100%": { transform: "translate(-40px, -40px)" },
        },
        "gradient-4": {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(20px, 20px)" },
          "100%": { transform: "translate(40px, 40px)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

