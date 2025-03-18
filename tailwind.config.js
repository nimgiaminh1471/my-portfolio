/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#1d4ed8',
        text: '#f3f4f6',
        'text-light': '#9ca3af',
        background: '#111827',
        'background-light': '#1f2937',
        border: '#374151',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
} 