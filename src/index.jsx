import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Exchange from './components/exchange';
import { getTheme } from './theme';

const store = configureStore();

render(
  <Provider store={store}>
    <ThemeProvider theme={getTheme()}>
      <Exchange />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
