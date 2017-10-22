// import {createSelector} from 'reselect'; 

// export const getAll = state => state[NAME];

import {STATE_NAME} from '../constants'

export const getAllRecipes = state => {
  const {recipes} = state[STATE_NAME];
  return recipes
    ? Object.keys(recipes).map(key => {
        let recipe = recipes[key];
        let newRecipe = {
          title: recipe.title,
          image: recipe.thumbnail,
          id: key
        }
        return newRecipe;
      })
    : null
}

export const getUiState = state => {
  return state[STATE_NAME].uiState;
}

// export const getCompleted = _.compose(filterCompleted, getAll); export const
// getActive = _.compose(filterActive, getAll);