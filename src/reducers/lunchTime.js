const lunchTime = (state = {
	mealList : [],
	ingredientList : []
}, action) => {
	let newState = Object.assign({},state);
	switch (action.type) {
		case 'INGREDIENT_LIST':
			newState.ingredientList = action.payload;
			break;
		case 'MEAL_LIST':
			newState.mealList = action.payload;
			break;
	}
	return newState;
}

export default lunchTime;