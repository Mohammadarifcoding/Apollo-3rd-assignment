import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TCar } from './car.interface';
import { CarModel } from './car.model';

const CreateCarIntoDb = async (payload: TCar) => {
  const result = await CarModel.create(payload);
  const savedResult = await CarModel.findById(result._id);
  return savedResult;
};

const GetAllCarsFromDb = async () => {
  const result = await CarModel.find();
  return result;
};

const GetCarBasedId = async (id: string) => {
  const result = await CarModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Didn't found any Car");
  }
  return result;
};
export const CarServices = {
  CreateCarIntoDb,
  GetCarBasedId,
  GetAllCarsFromDb,
};
