import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TAuth, TUser } from './user.interface';
import { UserModel } from './user.model';



const createUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  const savedUser = await UserModel.findById(result._id)
    .select('-password')
    .exec();
  return savedUser;
};

const DoingSigninIntoDb = async(payload:TAuth)=>{
  const {email,password} = payload
  const findUser = await UserModel.find({email:email,password:password}).select('-password')
  .exec();
  if(!findUser){
    throw new AppError(httpStatus.NOT_FOUND,"Couldn't found the account")
  }
  return findUser
}

export const UserServices = {
  createUserIntoDB,DoingSigninIntoDb
};
