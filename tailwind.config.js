const pseudoElements = require('tailwindcss-pseudo-elements');

module.exports = {
  plugins: [
    pseudoElements(),
    ({ addUtilities }) =>
      addUtilities(
        {
          '.empty-content': {
            content: "''"
          },
          '.dash-content': {
            content: "'-'"
          },
          '.pipe-content': {
            content: "'|'"
          },
          '.bullet-content': {
            content: "'•'"
          }
        },
        ['before', 'after', 'last']
      )
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        payment: "url('/subscription.png')"
      }),
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        grey: '#F7F7F7',
        header: '#545452',
        'red-construir': '#ED1C22',
        'almost-black': '#121317',
        'admin-dark-gray': '#282929',
        'admin-darker-gray': '#1E2021',
        'admin-lighter-gray': '#D1D5DB',
        'admin-light-gray': '#4A4A4A',
        'red-red': '#FF0000',
        'gray-3e': '#3e3e3e'
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        28: '7rem',
        75: '18.75rem',
        116: '29rem',
        120: '30rem',
        136: '34rem',
        160: '40rem',
        192: '48rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      maxWidth: {
        '2xs': '10rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(-5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in': 'fade-in 1s ease'
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        85: '0.85',
        90: '0.90',
        95: '0.95'
      },
      height: {
        '2screenwidth': '200vw'
      },
      width: {
        '2screenwidth': '200vw'
      },
      minHeight: {
        0: '0',
        input: '112px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%'
      },
      borderWidth: {
        12: '12px',
        1: '1px',
        3: '3px'
      },
      fontFamily: {
        secondary: ['Libre Franklin'],
        primary: ['Libre Baskerville'],
        publituris: ['Cabin']
      }
    }
  }
};
