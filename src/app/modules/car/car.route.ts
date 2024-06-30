import express from 'express';


import validateRequest from '../../middlewares/validateRequest';
import { CarValidation } from './car.validation';
import { CarControllers } from './car.controller';



const router = express.Router();

router.post(
  '/',
  validateRequest(CarValidation.CarValidationSchema),
  CarControllers.createCar);

export const CarRoutes = router;
