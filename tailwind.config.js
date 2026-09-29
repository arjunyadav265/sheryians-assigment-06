/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fefdf0',
        ink: '#1c1c1c',
        navy: '#221653',
        leaf: '#6fbf73',
        limebadge: '#e4f64c',
        lav: '#cfa9ff',
        sun: '#ffc222',
        sky: '#c9ddff',
        coral: '#f7b198',
        mint: '#b9ed9a',
        mintdeep: '#8edd65',
        peach: '#f9cfa5',
        bark: '#8a5a2e',
        honey: '#ffce6b',
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Georgia', 'serif'],
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        condensed: ['Anton', '"Arial Narrow"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
