import httpStatus from 'http-status';

import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';

const createStudent: RequestHandler = catchAsync(async (req, res) => {

  const result = await UserServices.createStudentIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: result,
  });
});
export const UserControllers = {
  createStudent,
};
