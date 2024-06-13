import express from 'express';

import ValidationMiddleWar from '../../middlewares/ValidRequest';



const router = express.Router();

router.post(
  '/create-student',
  ValidationMiddleWar(UserValidation.userValidationSchema),
  UserControllers.createStudent,
);

export const CarRoutes = router;
