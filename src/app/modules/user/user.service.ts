import { TUser } from './user.interface';
import { UserModel } from './user.model';



const createUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  const savedUser = await UserModel.findById(result._id)
    .select('-password')
    .exec();
  return savedUser;
};

const DoingSigninIntoDb = async(payload)=>{
  
}

export const UserServices = {
  createUserIntoDB,
};
