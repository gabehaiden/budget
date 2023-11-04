import { Router } from 'express';
import * as ProductController from '../controllers/productController';

const ProductRouter = Router()

ProductRouter.get('/:id', ProductController.getProductById)
ProductRouter.post('/', ProductController.createProduct)

export default ProductRouter