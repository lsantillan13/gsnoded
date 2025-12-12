import { Router } from 'express';
import * as productCtrl from '../controllers/products.controller.js';
const router = Router();

import { authJwt } from '../middlewares/index.js';

// Rutas principales de productos
router.post('/', [authJwt.verifyToken, authJwt.isModerator], productCtrl.createProduct);
router.get('/', productCtrl.getProducts);
router.get('/:id', productCtrl.getProduct);
router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.updateProduct);
router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.deleteProduct);

// Rutas específicas para secciones destacadas
router.get('/section/:sectionSlug', productCtrl.getProductsBySection);
router.get('/featured/sections', productCtrl.getHomepageSections);
router.patch('/:id/featured/:sectionSlug', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.toggleFeaturedSection);

export default router;