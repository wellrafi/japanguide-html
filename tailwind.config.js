/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './*.{html,js}',
    '*.{html,js}',
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      'alte': ['AlteHaasGroteskRegular'],
      'altebold': ['AlteHaasGroteskBold']
    },
    extend: {
      margin: {
        'header': 'margin-top: 139px'
      },
      height: {
        'px-34' : '2.125rem',
        'px-560' : '35rem'
      },
      width: {
        'px-530': '33.125rem',
        'px-340': '21.25rem',
        'px-435': '27.188rem'
      },
      maxWidth: {
        '435': '27.188rem'
      },
      colors: {
        clifford: '#dadada',
        primary: '#F34646',
        darkprimary: '#C23333',
      },
      container: {
        padding: '15px',
        center: true,
      },
      // dropShadow: {
      //   '1xx' : ''
      // }
    }
  }

}

