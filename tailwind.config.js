module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-main': 'var(--color-main)',
        'color-main-light': 'var(--color-main-light)',
        'color-main-dark': 'var(--color-main-dark)',
        'color-accent': 'var(--color-accent)',
        'color-accent-light': 'var(--color-accent-light)',
        'color-accent-dark': 'var(--color-accent-dark)',
        'color-base-0': 'var(--color-base-0)',
        'color-base-1': 'var(--color-base-1)',
        'color-base-2': 'var(--color-base-2)',
        'color-base-3': 'var(--color-base-3)',
        'color-base-4': 'var(--color-base-4)',
        'color-base-5': 'var(--color-base-5)',
        'color-base-6': 'var(--color-base-6)',
        'color-base-7': 'var(--color-base-7)',
        'color-base-8': 'var(--color-base-8)',
        'color-base-9': 'var(--color-base-9)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
      },
      fontSize: {
        advert: 'var(--advert)',
        'slogan-lg': 'var(--slogan-lg)',
        'slogan-sm': 'var(--slogan-sm)',
        'header-lg': 'var(--header-lg)',
        'header-sm': 'var(--header-sm)',
        'heading-1': 'var(--heading-1)',
        'heading-2': 'var(--heading-2)',
        'heading-3': 'var(--heading-3)',
        'heading-4': 'var(--heading-4)',
        'heading-5': 'var(--heading-5)',
        'heading-6': 'var(--heading-6)',
        'body-lg': 'var(--body-lg)',
        'body-md': 'var(--body-md)',
        'body-sm': 'var(--body-sm)',
        caption: 'var(--caption)',
        'button-lg': 'var(--button-lg)',
        'button-md': 'var(--button-md)',
        'button-sm': 'var(--button-sm)',
      },
      lineHeight: {
        advert: 'calc(var(--advert)*var(--leading-rate))',
        'slogan-lg': 'calc(var(--slogan-lg)*var(--leading-rate))',
        'slogan-sm': 'calc(var(--slogan-sm)*var(--leading-rate))',
        'header-lg': 'calc(var(--header-lg)*var(--leading-rate))',
        'header-sm': 'calc(var(--header-sm)*var(--leading-rate))',
        'heading-1': 'calc(var(--heading-1)*var(--leading-rate))',
        'heading-2': 'calc(var(--heading-2)*var(--leading-rate))',
        'heading-3': 'calc(var(--heading-3)*var(--leading-rate))',
        'heading-4': 'calc(var(--heading-4)*var(--leading-rate))',
        'heading-5': 'calc(var(--heading-5)*var(--leading-rate))',
        'heading-6': 'calc(var(--heading-6)*var(--leading-rate))',
        'body-lg': 'calc(var(--body-lg)*var(--leading-rate))',
        'body-md': 'calc(var(--body-md)*var(--leading-rate))',
        'body-sm': 'calc(var(--body-sm)*var(--leading-rate))',
        caption: 'calc(var(--caption)*var(--leading-rate))',
        'button-lg': 'calc(var(--button-lg)*var(--leading-rate))',
        'button-md': 'calc(var(--button-md)*var(--leading-rate))',
        'button-sm': 'calc(var(--button-sm)*var(--leading-rate))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
