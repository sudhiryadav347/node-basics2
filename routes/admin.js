import { Router } from 'express';

const router = Router();

import { getAddProducts, postAddProducts } from '../controllers/products.js';

router.get('/add-product', getAddProducts);

router.post('/add-product', postAddProducts);

export default router;
