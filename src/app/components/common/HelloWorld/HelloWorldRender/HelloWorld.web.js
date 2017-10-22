//Render

import React, {Component} from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  background-color: red;
`

export default class HelloWorldRender extends Component{
 render () {
    return(
    	<div>
          <StyledSpan>
              Sou o render de: Web!
          </StyledSpan>
      </div>
    );
  }
}
