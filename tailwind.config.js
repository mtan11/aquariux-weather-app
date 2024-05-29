/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      purple: {
        1: '#6C40B5',
        2: '#28124D',
      },
      gray: {
        1: '#666666',
      },
      dark: {
        1: '#1A1A1A',
      },
    },
  },
};
export const darkMode = 'class';
export const plugins = [];
