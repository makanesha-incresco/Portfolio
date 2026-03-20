/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#38BDF8", // Brand Blue
        "secondary": "#38BDF8", // Consistent Blue
        "background": "#020617",
        "surface": "#0f172a",
        "on-background": "#f8fafc",
        "on-surface": "#f1f5f9",
        "on-primary": "#ffffff",
        "outline-variant": "#334155",
        "surface-container-low": "#1e293b",
        "surface-container-high": "#334155",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [],
}
