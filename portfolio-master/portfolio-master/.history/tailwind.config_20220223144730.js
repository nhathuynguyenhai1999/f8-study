module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      logo: ['Hi Melody'],
    },
    extend: {
      colors: {
        primary: '#f8f7f1',
        'tx-primary': '#0d2f3f',
        green: '#286f6c',
        yellow: '#efc049',
        red: '#f26440',
      },
      fontSize: {
        13: '13px',
        14: '14px',
        16: '16px',
        20: '20px',
        26: '26px',
        24: '24px',
        32: '32px',
        36: '36px',
        48: '48px',
      },
      boxShadow: {
        md: '6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3);',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
};
