import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from '</containers/app';
import configureStore from '</store/configureStore.js';

const store = configureStore();
const rootElement = document.querySelector('#root');

if (module.hot) {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    rootElement
  );

  module.hot.accept('./containers/app.js', () => {
    /* eslint-disable global-require */
    const NextApp = require('./containers/app.js').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement,
    );
  });
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
}
