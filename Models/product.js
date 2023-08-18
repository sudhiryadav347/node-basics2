const products = [];

module.exports = class Product {
	constructor(value) {
		this.title = value;
	}

	save() {
		products.push(this);
	}

	static fetchAll() {
		return products;
	}
};
