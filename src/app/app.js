import React from 'react';

import {Provider} from 'react-redux';

import {store} from './redux-abs'

import {Recipe} from 'features'

const App = (props) => {
  return (
    <Provider store={store}>
      <Recipe/>
    </Provider>
  )
}
export default App;

