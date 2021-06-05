import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
    },
  },
  typography: {
    fontFamily: 'SpoqaHanSansNeo',
  },
  overrides: {
    MuiCssBaseline: {
      // '@global': {
      //   svg: {
      //     maxWidth: '100%',
      //     maxHeight: '100%',
      // },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiCard: {
      root: {
        borderRadius: 15,
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
});

export default theme;
