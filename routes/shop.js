import { Router } from 'express';

const router = Router();

import { getProducts } from '../controllers/products.js';

router.get('/', getProducts);

export default router;
