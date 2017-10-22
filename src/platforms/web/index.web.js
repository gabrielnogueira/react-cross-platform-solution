import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'app';

ReactDOM.render(
  <div>
    <AppContainer>
      <App/>
    </AppContainer>
    <span >Sou o index.web.js</span>
   </div>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('app', () => {
    const NextApp = require('app').default;
    ReactDOM.render(
      <div>
        <AppContainer>
          <NextApp/>
        </AppContainer>
        <span >Sou o index.web.js</span>
      </div>,
      document.getElementById('root')
    );
  });
}