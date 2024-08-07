import { Router } from 'express';
import { CarRoutes } from '../modules/car/car.route';
import { AuthRoutes } from '../modules/user/user.route';
import { BookingRoutes } from '../modules/booking/booking.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/cars',
    route: CarRoutes,
  },
  {
    path:'/bookings',
    route:BookingRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
