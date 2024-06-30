import httpStatus from 'http-status';

import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';

const createUser: RequestHandler = catchAsync(async (req, res) => {

  const result = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: result,
  });
});

const SignInUser : RequestHandler = catchAsync(async(req,res)=>{
  const result = await UserServices.DoingSigninIntoDb(req.body)
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"User logged in successfully",
    data:result
  })
})
export const UserControllers = {
  createUser,SignInUser
};
