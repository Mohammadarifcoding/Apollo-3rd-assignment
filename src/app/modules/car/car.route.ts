import express from 'express';


import { UserValidation } from '../user/user.validation';
import { UserControllers } from '../user/user.controller';
import validateRequest from '../../middlewares/validateRequest';



const router = express.Router();

router.post(
  '/create-student',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser
);

export const CarRoutes = router;
