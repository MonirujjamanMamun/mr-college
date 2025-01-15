import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primeColor: '#262626',
        lightText: '#6D6D6D',
        primary: '#2453DF',
        secondary: '#0C1F58',
      },
    },
  },
  plugins: [forms],
};
