import express from 'express';
import { UserControllers } from './user.controller';
import ValidationMiddleWar from '../../middlewares/ValidRequest';
import { UserValidation } from './user.validation';


const router = express.Router();

router.post(
  '/create-student',
  ValidationMiddleWar(UserValidation.userValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
