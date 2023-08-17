const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//Make public folder statically served.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Handle 404
app.use(errorController.get404Page);

app.listen(3002);
