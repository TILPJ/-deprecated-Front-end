import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

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
