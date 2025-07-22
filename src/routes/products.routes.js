import { Router } from 'express';
import * as productCtrl from '../controllers/products.controller.js';
const router = Router();

import { authJwt } from '../middlewares/index.js';

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productCtrl.createProduct ); // Assuming you want to protect this route

router.get('/', productCtrl.getProducts);

router.get('/:id', productCtrl.getProduct);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.updateProduct);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.deleteProduct);

export default router;