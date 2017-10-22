import {bindActionCreators} from 'redux';
import {connect as reduxConnect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAllRecipes, getUiState } from './selectors';

import RecipeActionCreator from './actions';

export function mapDispatchToProps(dispatch){
    return bindActionCreators(RecipeActionCreator, dispatch);
}

export function mapStateToProps(state, props) {
    return createStructuredSelector({recipeList:getAllRecipes, uiState:getUiState})
}

export function connect(Component){
    return reduxConnect(mapStateToProps, mapDispatchToProps)(Component);
}



