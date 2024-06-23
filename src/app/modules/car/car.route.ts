import express from 'express';

import ValidationMiddleWar from '../../middlewares/ValidRequest';
import { UserValidation } from '../user/user.validation';
import { UserControllers } from '../user/user.controller';



const router = express.Router();

router.post(
  '/create-student',
  ValidationMiddleWar(UserValidation.userValidationSchema),
  UserControllers.createStudent,
);

export const CarRoutes = router;
