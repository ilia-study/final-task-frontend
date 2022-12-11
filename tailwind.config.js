module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'background': 'background',
        'filter': 'filter',
        'height': 'height',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'appearance': 'appearance 0.5s forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}