import React from 'react';

import {AppContainer} from 'react-hot-loader'

import {AppRegistry, View, Text} from 'react-native';

import App from '../mobile/main';

AppRegistry.registerComponent('RCPS', () => () =>(
  <View style={{flex:1}}>
    <AppContainer>
      <App/>
    </AppContainer> 
    <Text style={{fontSize:8, color:'red'}}>Sou o index.native.web.js</Text>
  </View>
));
AppRegistry.runApplication('RCPS', {
  rootTag: document.getElementById('root')
})

// Hot Module Replacement API
if (module.hot) {
  module
    .hot
    .accept('../mobile/main', () => {
      const NextApp = require('../mobile/main').default;
      AppRegistry.registerComponent('RCPS', () => () =>(
        <View style={{flex:1}}>
          <AppContainer>
            <NextApp/>
          </AppContainer>
          <Text style={{fontSize:8, color:'red'}}>Sou o index.native.web.js</Text>
        </View>
      ));
      AppRegistry.runApplication('RCPS', {
        rootTag: document.getElementById('root')
      })
    });
}
