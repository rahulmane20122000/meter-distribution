
import { customerMeterModel } from "../customerMeter/customerMeter.schema";
import { customerModel } from "./customer.schema";
import { ICustomer } from "./customer.types";

const add = (customer: ICustomer) => customerModel.create({ ...customer });

const getAll = (orderBy?: string,field?:string,UsersLimit?:number,page?:number,searchValue?:string) => customerModel.findAndCountAll({
//    where:{
//     name:{
//         [Op.substring]:searchValue
//     }
    
//    },
    limit:UsersLimit,
    offset:(page || 0)*(UsersLimit || 0),
    order: [
        [field || "", orderBy || ""]
    ],
    include: [
        {
            model: customerMeterModel,

        },
        
    ],
});

const deleteOne = (id: string) => customerModel.destroy({ where: { id: id } });

const updateOne = (id: string, updatedCustomerDetails: object) => customerModel.update(updatedCustomerDetails, { where: { id: id } })

const getOne = (fields: object) => customerModel.findOne({ ...fields });

export default { add, getAll, deleteOne, updateOne, getOne }