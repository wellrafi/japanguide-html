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
        margin: {
          'header': "margin-top: 139px"
        },
        height: {
          'px-34' : "2.125rem"
        },
        colors: {
          clifford: '#dadada',
          primary: '#F34646',
          darkprimary: '#C23333',
        },
        container: {
            padding: "15px",
            center: true,
            '2xl': '1350px'
        }
      }
    }
}