import { Types } from "mongoose";

export type TBooking =  {
    date: string;
    user: Types.ObjectId;
    car: Types.ObjectId;
    startTime: String;
    endTime: String;
    totalCost: number;
  }

  export type TBookingData = {
    date: string;
    user: Types.ObjectId;
    carId: Types.ObjectId;
    startTime: String;
    endTime: String;
    totalCost: number;
  }