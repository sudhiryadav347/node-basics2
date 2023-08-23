import Product from '../Model/product.js';

export function getAddProducts(req, res, next) {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formCSS: true,
		productCSS: true,
		activeAddProduct: true,
	});
}

export function postAddProducts(req, res, next) {
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
}

export function getProducts(req, res, next) {
	Product.fetchAll( products => {
		res.render('shop', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true,
		});
	});
	
}
