const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
	// res.send(
	// 	'<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>'
	// );
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
	// console.log(req.body);
	res.redirect('/');
});

exports.routes = router;
exports.products = products;