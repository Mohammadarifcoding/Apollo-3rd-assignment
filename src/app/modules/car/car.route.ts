import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { CarValidation } from './car.validation';
import { CarControllers } from './car.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin'),
  validateRequest(CarValidation.CarValidationSchema),
  CarControllers.createCar,
);

router.get('/', CarControllers.GetCar);

router.get('/:id', CarControllers.GetCarById);
router.delete('/:id', auth('admin'), CarControllers.DeleteCar);
router.put(
  '/:id',
  auth('admin'),
  validateRequest(CarValidation.UpdateCarValidationSchema),
  CarControllers.UpdateCar,
);
router.put('/return', auth('admin'), CarControllers.ReturnCar);

export const CarRoutes = router;
