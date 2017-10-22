import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'app';

ReactDOM.render(
  <div>
    <span>Sou o index.desktop.js</span>
    <AppContainer>
      <App/>
    </AppContainer>,
  </div>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('app', () => {
    const NextApp = require('app').default;
    ReactDOM.render(
      <div>
        <span>Sou o index.desktop.js</span>
        <AppContainer>
          <NextApp/>
        </AppContainer>,
      </div>,
      document.getElementById('root')
    );
  });
}