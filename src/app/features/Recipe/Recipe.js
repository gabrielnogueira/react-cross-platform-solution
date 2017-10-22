import React from 'react';
import {RecipeList} from './scenes';
import {connect} from './redux-abs'

const Recipe = (props) => (
    <RecipeList {...props} />
);

export default connect(Recipe);

