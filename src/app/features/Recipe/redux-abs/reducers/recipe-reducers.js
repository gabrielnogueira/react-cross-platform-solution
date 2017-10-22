import {createReducer} from 'utils';
import {actionTypes} from '../constants'
import {combineReducers} from 'redux';

const {SEARCH_RECIPES,
        SET_SEARCHED_RECIPES,
        SET_SEARCHED_MORE_RECIPES,
        SEARCH_RECIPES_ERROR} = actionTypes;

export const recipeReducer = createReducer([], {
    [SET_SEARCHED_RECIPES](state, action){
        let newRecipes = {};
        let i = 0;
        const recipes = action.payload
        if(recipes && recipes.length > 0){
            recipes.forEach((recipe) =>{
                newRecipes['recipe ' + ++i] = recipe;
            }, this);
        }else{
            newRecipes = null;
        }

        return newRecipes
    },
    [SET_SEARCHED_MORE_RECIPES](state, action){
        let newRecipes = state;
        let i = Object.keys(state).length;;
        const recipes = action.payload
        if(recipes && recipes.length > 0){
            recipes.forEach((recipe) =>{
                newRecipes['recipe ' + ++i] = recipe;
            }, this);
        }

        return newRecipes
    },
    [SEARCH_RECIPES_ERROR](state, action){
        return null;
    }
});

export const uiStateReducer = createReducer({isSearching:false, listType:'box'}, {
    [SEARCH_RECIPES_ERROR](state, action){
        return Object.assign({}, state, {isSearching:false, error:true})
    },

    [SEARCH_RECIPES](state, action){
        return Object.assign({}, state, {isSearching:true, error:false})
    },

    multiHandlers: {
        setSearchedRecipes: [SET_SEARCHED_RECIPES, SET_SEARCHED_MORE_RECIPES],
    },

    setSearchedRecipes(state, action) {
        return Object.assign({}, state, {isSearching:false, error:false})
    },

});

export default combineReducers({recipes:recipeReducer, uiState:uiStateReducer});

