import {Api} from 'services';

const RecipeService = {
        getByIngredients: function(ingredients, page){
            const params = [
                `i=${encodeURIComponent(ingredients)}`,
                `p=${page}`
            ].join('&');
            return Api.get(`/api/?${params}`);
        }
}

export default RecipeService;
