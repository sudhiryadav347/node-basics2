const products = [];

export default class Products {
	constructor(value) {
		this.title = value;
	}

    save() {
        products.push(this);
    }

    static fetchAll() {
       return this.products;
    }
};
