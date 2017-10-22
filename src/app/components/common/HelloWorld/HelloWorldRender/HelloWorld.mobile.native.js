import React, {Component} from 'react';
import {
  View
} from 'react-native';

import styled from 'styled-components/native';

const StyledText = styled.Text`
  background-color: yellow;
`

export default class HelloWorldRenderNative extends Component{
 render () {
    return(
       <View>
         <StyledText>
              Sou o render Generico!
         </StyledText>
      </View>
    );
  }
}