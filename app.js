const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//Make public folder statically served.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//Handle 404
app.use((req, res, next) => {
	// res.status(404).send("<h1>Page Not Found!</h1>");
	res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3002);
