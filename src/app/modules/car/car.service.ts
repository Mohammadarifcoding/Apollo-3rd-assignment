import { TCar } from "./car.interface";
import { CarModel } from "./car.model";

const CreateCarIntoDb = async(payload:TCar)=>{
 const result = await CarModel.create(payload)
 const savedResult = await CarModel.findById(result._id)
 return savedResult
}

const GetAllCarsFromDb = async()=>{
    const result = await CarModel.find()
    return result
}
export const CarServices = {
    CreateCarIntoDb,GetAllCarsFromDb
}