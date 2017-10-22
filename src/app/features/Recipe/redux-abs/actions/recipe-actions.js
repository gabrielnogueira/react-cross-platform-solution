import {actionTypes} from '../constants'

const{SEARCH_RECIPES} = actionTypes;

export function fetchRecipes(ingredients, page) {
    return {
        type: SEARCH_RECIPES,
        payload: {ingredients, page},
        searching: true
    }
}
