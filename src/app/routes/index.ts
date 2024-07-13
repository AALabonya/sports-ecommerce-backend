import { Router } from 'express';
import { productRoutes } from '../modules/products/sportsProduct.route';
import { OrderRoutes } from '../modules/order/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
