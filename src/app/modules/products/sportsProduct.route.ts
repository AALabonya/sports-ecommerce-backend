import express from 'express';
import { ProductController } from './sportsProduct.controller';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProduct);
router.get('/:id', ProductController.getSingleProduct);
router.patch('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export const productRoutes = router;
