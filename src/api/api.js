const initData = {
	meal: [
		{ id: 1, name: 'burger', ingrediences: [1, 2, 3, 6, 7, 8] },
		{ id: 2, name: 'scrambled eggs', ingrediences: [2, 6, 4] },
		{ id: 3, name: 'rizoto', ingrediences: [2, 9, 7] },
		{ id: 4, name: 'grilled steak, potatoes', ingrediences: [1, 6, 5, 10] },
	],
	ingredient: [
		{ id: 1, name: "potatoes", isAlergen: false },
		{ id: 2, name: "eggs", isAlergen: false },
		{ id: 3, name: "corn", isAlergen: false },
		{ id: 4, name: "milk", isAlergen: true },
		{ id: 5, name: "nuts", isAlergen: true },
		{ id: 6, name: "oil", isAlergen: false },
		{ id: 7, name: "chilli", isAlergen: true },
		{ id: 8, name: "flour", isAlergen: false },
		{ id: 9, name: "rice", isAlergen: false },
		{ id: 10, name: "meal", isAlergen: false },
	]
}

const responseTime = () => (100 + Math.random()*900);

class Api {
	constructor() {
		let cache = localStorage.getItem('db');
		if (cache) {
			this.data = JSON.parse(cache);
		} else {
			this.data = initData;
			this._save();
		}
	}
	_save() {
		localStorage.setItem('db', JSON.stringify(this.data))
	}
	get(collection, id = null) {
		return new Promise ((resolve, reject) => {
			setTimeout(() => {
				let data = this.data[collection];
				let response = id? data.find(item => item == id) : data;
				resolve({
					status: 'ok',
					body: response
				})
			}, responseTime());
		})
	}
	insert(collection, object) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let data = this.data[collection];
				let lastId = data[data.length-1];
				object.id = lastId + 1;
				this.data[collection].push(object);
				this._save();
				resolve({
					status: 'ok',
					body: object
				})
			}, responseTime())
		})
	}
	delete(collection, object) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let index = this.data[collection].findIndex(item => item.id == object.id);
				this.data[collection].splice(index, 1);
				this._save();
				resolve({
					status: 'ok'
				})
			}, responseTime())
		})
	}
	update(collection, object) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let index = this.data[collection].findIndex(item => item.id == object.id);
				this.data[collection][index] = object;
				this._save();
				resolve({
					status: 'ok',
					body: object
				})
			}, responseTime())
		})
	}
}
const api = new Api();
export default api;