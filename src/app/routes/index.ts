import { Router } from 'express';
import { CarRoutes } from '../modules/car/car.route';
import { AuthRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/car',
    route: CarRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
