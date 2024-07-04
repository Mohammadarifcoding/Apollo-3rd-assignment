import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { BookingValidation } from './booking.validation';
import { BookingController } from './booking.controller';

const router = express.Router();

router.post(
  '/',
  auth("user"),
  validateRequest(BookingValidation.BookingValidationSchema),
 BookingController.CreatieBooking,
);

// router.get('/', CarControllers.GetCar);

// router.get('/:id',CarControllers.GetCarById)
// router.delete('/:id',CarControllers.DeleteCar)
// router.put('/:id',auth("admin"),validateRequest(CarValidation.UpdateCarValidationSchema),CarControllers.UpdateCar)

export const BookingRoutes = router;
