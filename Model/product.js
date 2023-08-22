import * as path from 'path';
import * as fs from 'fs';
import { pathToDataFile } from '../util/rootpath.js';

export default class Product {
	constructor(value) {
		this.title = value;
	}

	save() {
		fs.readFile(pathToDataFile(), (err, fileContent) => {
			let products = [];
			if (!err) {
				//if the products.json file is empty
				products = fileContent.length == 0 ? [] : JSON.parse(fileContent);
			}
			products.push(this);
			fs.writeFile(pathToDataFile(), JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		fs.readFile(pathToDataFile(), (err, fileContent) => {
			if (err) {
				cb([]);
			}
				cb(JSON.parse(fileContent));
		});
	}
}
