import React from 'react';
import RecipeListRender from './RecipeListRender';
import RecipeListContainer from './RecipeListContainer'

export default class RecipeList extends RecipeListContainer {
    render() {
        return (<RecipeListRender {...this.props} 
        fetchMore={()=> this.searchMore()}
        fetchRecipes={(ingredients) => this.searchPressed(ingredients)}/>);
    }
}
