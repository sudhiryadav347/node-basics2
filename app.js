import express from 'express';
import ejs from 'ejs';
const app = express();
import { join } from 'path';

app.set('view engine', 'ejs');
app.set('views', 'views');

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { get404Page } from './controllers/error.js';

app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
//Make public folder statically served.
app.use(express.static('public'));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Handle 404
app.use(get404Page);

app.listen(3002);
