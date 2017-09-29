import api from '../api/api';
import Meal from '../classes/Meal';
import Ingredient from '../classes/Ingredient';

const API_COLLECTION = {
	ingredient: 'ingredient',
	meal: 'meal'
}

export const asyncListIngredient = () => ((dispach) => {
	dispach({
		type: 'INGREDIENT_FETCHING'
	})
	api.get(API_COLLECTION.ingredient)
		.then((result) => {
			dispach({
				type: 'INGREDIENT_LIST',
				payload : result.body
			})
		})
})

export const asyncListMeal = () => ((dispach) => {
	dispach({
		type: 'MEAL_FETCHING'
	})
	api.get(API_COLLECTION.meal)
		.then((result) => {
			dispach({
				type: 'MEAL_LIST',
				payload : result.body
			})
		})
})