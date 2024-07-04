import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const CreatieBooking = catchAsync(async (req , res) => {
    // @ts-ignore
  const { user ,body } = req;
  const result =  await BookingServices.CreateBookingIntoDb(body,user._id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Car booked successfully",
    data: result,
  });
});

export const BookingController = {
  CreatieBooking,
};