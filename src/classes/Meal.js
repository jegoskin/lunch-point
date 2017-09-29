class Meal {
	constructor(dbEntity) {
		this.id = dbEntity.id;
		this.name = dbEntity.name;
		this.ingredients = dbEntity.ingredients;
	}
	json() {
		let result = {
			name: this.name,
			ingredients: this.ingredients,
		}
		if (this.id) result.id = this.id;
		return result;
	}
}
export default Meal;