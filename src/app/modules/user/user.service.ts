import { TUser } from './user.interface';
import { UserModel } from './user.model';
const createStudentIntoDB = async ( payload: TUser) => {
 const result = await UserModel.create(payload)
 const savedUser = await UserModel.findById(result._id).select('-password').exec()
 return savedUser
};

export const UserServices = {
  createStudentIntoDB,
};
