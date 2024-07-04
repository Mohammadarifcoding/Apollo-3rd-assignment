import { TUser } from '../user/user.interface';
import { TBooking, TBookingData } from './booking.interface';
import { BookingModel } from './booking.model';

const CreateBookingIntoDb = async (
  payload: Partial<TBookingData>,
  userId: string,
) => {
  const { carId, ...OtherData } = payload;
  const data = { ...OtherData, user: userId, car: carId };

  const result = await BookingModel.create(data);
  const findBooking = await BookingModel.findById(result._id)
    .populate('user')
    .populate('car');

  return findBooking;
};
const GetMyBookingFromDb = async(userId:string)=>{
    const result = await BookingModel.findOne({user:userId}).populate('user')
    .populate('car');
    return result

}

export const BookingServices = {
  CreateBookingIntoDb,GetMyBookingFromDb
};
