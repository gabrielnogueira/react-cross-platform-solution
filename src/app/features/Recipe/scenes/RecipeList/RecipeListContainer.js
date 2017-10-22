import {Component} from 'react';

export default class RecipeListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {searchedIngredients:'', searchedPage:1}
    }

    doSearch(){
        this.props.fetchRecipes(this.state.searchedIngredients, this.state.searchedPage);
    }

    searchPressed(ingredients) {
        this.setState({searchedIngredients: ingredients})
        this.doSearch();
    }

    searchMore(){
        this.setState({searchedPage:++this.state.searchedPage})
        this.doSearch();
    }
}


