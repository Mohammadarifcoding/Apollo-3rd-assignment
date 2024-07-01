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
  const findUser = await UserModel.findOne({email:email,password:password}).select('-password')
  .exec();
  console.log(findUser)
  if(!findUser){
    throw new AppError(httpStatus.NOT_FOUND,"Couldn't found the account")
  }
  //  checking if the user already deleted

  const isDeleted = findUser.isDeleted
  if(isDeleted){
    throw new AppError(httpStatus.FORBIDDEN,"This account is already deleted")

  }
  return findUser
}

export const UserServices = {
  createUserIntoDB,DoingSigninIntoDb
};
