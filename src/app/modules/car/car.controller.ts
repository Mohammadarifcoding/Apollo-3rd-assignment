import httpStatus from 'http-status';

import {  RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { CarServices } from './car.service';

const createCar: RequestHandler = catchAsync(async (req, res) => {

  const result = await CarServices.CreateCarIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Car created successfully',
    data: result,
  });
});

const GetCar: RequestHandler = catchAsync(async (req, res) => {

    const result = await CarServices.GetAllCarsFromDb();
  
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Cars retrieved successfully",
      data: result,
    });
  });


export const CarControllers = {
  createCar,GetCar
};
