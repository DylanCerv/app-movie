/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-text': '#000000DE',
        'colo-bg-white-2': '#fafafa',
        'color-text_1': '#000000DE',
        'color-text-87': 'rgba(0, 0, 0, 0.871)',
        'color-text-gray': '#0000008A',
        'fondo': '#1f1f1f',
        'white-2': '#fafafa',
        'yellow-text': '#f5c518',
      },
    },
  },
  plugins: [],
}
