module.exports = {
  content: ['./index.html', './App.vue', './components/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundSize: {
        '800': '800% 800%',
      },
      animation: {
        'gradient-move': 'gradientMove 12s ease-in-out infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
