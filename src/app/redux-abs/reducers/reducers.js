import {combineReducers} from 'redux';
import {recipe} from 'features';

const {STATE_NAME: RECIPE_STATE_NAME, reducers: recipeReducers} = recipe

export default combineReducers({[RECIPE_STATE_NAME]:recipeReducers});
