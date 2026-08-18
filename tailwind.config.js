/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#fbfaf6',
        line: '#ded8cc',
        fern: '#4f6b58',
        clay: '#c96543',
        bluegray: '#4e7184',
        carbon: '#111111',
        mist: '#5f625c',
        citrus: '#d9ff5f',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 17, 17, 0.08)',
      },
    },
  },
  plugins: [],
};
