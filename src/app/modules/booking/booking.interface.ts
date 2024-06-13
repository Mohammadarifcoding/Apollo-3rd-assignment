import { Types } from "mongoose";

export type TBooking =  {
    date: string;
    user: Types.ObjectId;
    car: Types.ObjectId;
    startTime: Date;
    endTime: Date;
    totalCost: number;
  }