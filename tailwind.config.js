/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Using Tailwind's default breakpoints:
    // sm: '640px'
    // md: '768px'
    // lg: '1024px'
    // xl: '1280px'
    // 2xl: '1536px'
    extend: {
      colors: {
        'primary-text': '#242424',
        'secondary-text': '#9e9e9e',
        'light-gray': '#e6e6e6',
        'primary-background': '#f0f2f5',
        'secondary-background': '#ffffff',
        'tertiary-background': '#f1f7ff',
        white: '#ffffff',
        black: '#000000',
      },
      boxShadow: {
        1: '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        box: '#f7f7f7',
        footer: 'rgba(0, 0, 0, 0.06)',
      },
      borderWidth: {
        box: '1px',
        footer: '1px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container-large': '1200px',
        'container-medium': '1010px',
      },
      backgroundImage: {
        'app-cover': "url('/assets/images/appCover.png')", // Added background image
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '200',
            fontDisplay: 'swap',
            src: `url('../assets/fonts/poppins-v20-latin-200.woff2') format('woff2'),
                  url('../assets/fonts/poppins-v20-latin-200.woff') format('woff')`,
          },
          {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontDisplay: 'swap',
            src: `url('../assets/fonts/poppins-v20-latin-300.woff2') format('woff2'),
                  url('../assets/fonts/poppins-v20-latin-300.woff') format('woff')`,
          },
          {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontDisplay: 'swap',
            src: `url('../assets/fonts/poppins-v20-latin-regular.woff2') format('woff2'),
                  url('../assets/fonts/poppins-v20-latin-regular.woff') format('woff')`,
          },
          {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontDisplay: 'swap',
            src: `url('../assets/fonts/poppins-v20-latin-500.woff2') format('woff2'),
                  url('../assets/fonts/poppins-v20-latin-500.woff') format('woff')`,
          },
          {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontDisplay: 'swap',
            src: `url('../assets/fonts/poppins-v20-latin-600.woff2') format('woff2'),
                  url('../assets/fonts/poppins-v20-latin-600.woff') format('woff')`,
          },
          {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontDisplay: 'swap',
            src: `url('../assets/fonts/poppins-v20-latin-700.woff2') format('woff2'),
                  url('../assets/fonts/poppins-v20-latin-700.woff') format('woff')`,
          },
        ],
      })
    },
  ],
}
