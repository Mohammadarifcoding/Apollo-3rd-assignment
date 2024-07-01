import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { CarValidation } from './car.validation';
import { CarControllers } from './car.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(CarValidation.CarValidationSchema),
  CarControllers.createCar,
);

router.get('/', CarControllers.GetCar);

router.get('/:id',CarControllers.GetCarById)
router.delete('/:id',CarControllers.DeleteCar)

export const CarRoutes = router;
