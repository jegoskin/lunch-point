class Ingredient {
	constructor(dbEntity) {
		this.id = dbEntity.id;
		this.name = dbEntity.name;
		this.isAlergen = dbEntity.isAlergen;
	}
	json() {
		let result = {
			name: this.name,
			isAlergen: this.isAlergen,
		}
		if (this.id) result.id = this.id;
		return result;
	}
}
export default Ingredient;