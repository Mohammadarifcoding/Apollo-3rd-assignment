import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { CarValidation } from './car.validation';
import { CarControllers } from './car.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth("admin"),
  validateRequest(CarValidation.CarValidationSchema),
  CarControllers.createCar,
);

router.get('/', CarControllers.GetCar);

router.get('/:id',CarControllers.GetCarById)
router.delete('/:id',CarControllers.DeleteCar)
router.put('/:id',validateRequest(CarValidation.UpdateCarValidationSchema),CarControllers.UpdateCar)

export const CarRoutes = router;
