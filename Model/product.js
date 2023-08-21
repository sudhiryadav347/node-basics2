import * as path from 'path';
import * as fs from 'fs';

export default class Product {
	constructor(value) {
		this.title = value;
	}

	save() {
		const p = path.join(process.cwd(), 'data', 'products.json');
		fs.readFile(p, (err, fileContent) => {
			let products = [];
			if (!err) {
				//if the products.json file is empty
				products = (fileContent.length == 0) ? [] : JSON.parse(fileContent);
			}
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll() {
		// return products;
	}
}
