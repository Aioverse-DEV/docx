/* AIOVERSE Theme - Tailwind CSS Configuration
 * Official brand colors for Tailwind CSS projects
 * Version 1.0 - March 2026
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        aioverse: {
          // Electric Aqua shades
          'electric-aqua': {
            DEFAULT: '#73effb',
            50: '#f0fcfe',
            100: '#e0f9fd',
            200: '#c1f3fb',
            300: '#a2edf9',
            400: '#73effb',
            500: '#44d8ea',
            600: '#2db8c9',
            700: '#1f8a96',
            800: '#125c64',
            900: '#002e32',
          },
          // Midnight Teal shades
          'midnight-teal': {
            DEFAULT: '#002428',
            50: '#e6f2f3',
            100: '#cce5e7',
            200: '#99cbcf',
            300: '#66b1b7',
            400: '#33979f',
            500: '#007d87',
            600: '#00636c',
            700: '#004a51',
            800: '#003136',
            900: '#002428',
          },
          // Soft White shades
          'soft-white': {
            DEFAULT: '#fafafa',
            50: '#ffffff',
            100: '#fafafa',
            200: '#f5f5f5',
            300: '#f0f0f0',
            400: '#ebebeb',
            500: '#e6e6e6',
            600: '#d1d1d1',
            700: '#bcbcbc',
            800: '#a7a7a7',
            900: '#929292',
          },
        },
      },
      fontFamily: {
        'nebula': ['NEBULA 2', 'sans-serif'],
        'nohemi': ['Nohemi', 'sans-serif'],
        'helvetica': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'tokyo-mono': ['Tokyo Trail Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1': ['72px', { lineHeight: '1.2', fontWeight: '800' }],
        'h2': ['48px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.5', fontWeight: '600' }],
      },
      backgroundImage: {
        'aioverse-gradient': 'linear-gradient(135deg, #002428 0%, rgba(115, 239, 251, 0.3) 100%)',
        'aioverse-accent': 'linear-gradient(90deg, #73effb 0%, #fafafa 100%)',
        'aioverse-dark': 'linear-gradient(180deg, #002428 0%, rgba(0, 36, 40, 0.95) 100%)',
      },
    },
  },
  plugins: [],
}
