/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        maroon: '#800000',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        blue: {
          500: '#0070F3',
          600: '#0051F3',
          700: '#003DD1',
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      aspectRatio: {
        '1/1.75': '1 / 1.75',
      },
    },
  },
  plugins: [
    ('@tailwindcss/forms'),
    ('@tailwindcss/aspect-ratio'),
  ],
}