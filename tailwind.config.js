/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#0ACA6F',
      'gray-01': '#8E8E93',
      'gray-02': '#AEAEB2',
      'gray-03': '#C7C7CC',
      'gray-04': '#D1D1D6',
      'gray-05': '#E5E5EA',
      'gray-06': '#F2F2F7',
      error: '#ED093F',
      white: '#FFFFFF',
    },
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
  },
  plugins: [],
};
