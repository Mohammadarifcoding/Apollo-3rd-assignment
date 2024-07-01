import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TAuth, TUser } from './user.interface';
import { UserModel } from './user.model';

import bcrypt, { hash } from 'bcrypt';

const createUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  const savedUser = await UserModel.findById(result._id)
    .select('-password')
    .exec();
  return savedUser;
};

const DoingSigninIntoDb = async (payload: TAuth) => {
  // const {email} = payload
  const findUser = await UserModel.findOne({ email: payload.email });
  // console.log(findUser)
  if (!findUser) {
    throw new AppError(httpStatus.NOT_FOUND, "Couldn't found the account");
  }
  //  checking if the user already deleted

  const isDeleted = findUser.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This account is already deleted');
  }
  // checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    findUser.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.NOT_FOUND, "Password doesn't matched");
  }
  const { password, ...userWithoutEmail } = findUser.toObject();

  return userWithoutEmail;
};

export const UserServices = {
  createUserIntoDB,
  DoingSigninIntoDb,
};
