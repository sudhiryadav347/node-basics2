const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Handle 404
app.use((req, res, next) => {
	// res.status(404).send("<h1>Page Not Found!</h1>");
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3002);
