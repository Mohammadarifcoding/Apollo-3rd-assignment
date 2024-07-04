import { TUser } from "../user/user.interface";
import { TBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const CreateBookingIntoDb = async(payload :Partial<TBooking>,userId:string)=>{
    const data = {...payload,user:userId}
   const result = BookingModel.create()
}

export const BookingServices = {
    CreateBookingIntoDb
}