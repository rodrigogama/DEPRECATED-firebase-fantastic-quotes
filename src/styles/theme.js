import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    type: 'dark',
    primary: {
      main: '#ff6363',
    },
    secondary: {
      main: '#bbe1fa',
    },
    background: {
      paper: '#424242',
      default: '#212121',
      level1: '#333',
    },
  },
});

export default theme;
