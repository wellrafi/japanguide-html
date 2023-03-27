tailwind.config = {
    theme: {
      minHeight: {
        lg: '700px',
        xl: '860px',
      },
      fontFamily: {
        'alte': ['AlteHaasGroteskRegular'],
        'altebold': ['AlteHaasGroteskBold']
      },
      extend: {
        colors: {
          clifford: '#dadada',
          primary: '#F34646',
          darkprimary: '#C23333',
        },
        container: {
            center: true,
            '2xl': '1350px'
        }
      }
    }
}