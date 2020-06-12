import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import App from './App';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import './config/firebase';

ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>,
  document.getElementById('root'),
);
