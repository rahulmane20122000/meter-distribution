
import customerMeterRepo from "../customerMeter/customerMeter.repo";
import customerMeterService from "../customerMeter/customerMeter.service";
import { meterConstants } from "../meter/meter.constants";
import { customerConstants } from "./customer.constants";
import customerRepo from "./customer.repo";
import { ICustomer } from "./customer.types";

const addCustomer = async(customer:ICustomer)=>{
  try {
    await customerRepo.add(customer);
    return customerConstants.CUSTOMER_ADDED
  } catch (error) {
    customerConstants.FAILED
  }
}

const getAllCustomers = async(orderBy?:string,field?:string,limit?:number,page?:number,searchValue?:string)=>{
    try {
      console.log(orderBy);
      return await customerRepo.getAll(orderBy,field,limit,page,searchValue);
    } catch (error) {
        throw error
    }
}


const deleteCustomer = async (id:string)=>{
  try {
   
    await customerRepo.deleteOne(id);
    return customerConstants.CUSTOMER_DELETED;
  } catch (error) {
    throw customerConstants.FAILED
  }
}

const updateCustomer = async(id:string,updatedCustomerDetails:object)=>{
  try {
    await customerRepo.updateOne(id,updatedCustomerDetails);
    return customerConstants.CUSTOMER_UPDATED;
  } catch (error) {
    throw customerConstants.FAILED
  }
}

const assignMeter = async(id:string,meterId:number)=>{
  try {
    const userId = Number(id);
    const response = await customerMeterService.assignMeter(userId,meterId);
    return response;
  } catch (error) {
    throw error
  }
}

const getMeter = async(userId:string)=>{
  try {
    return await customerMeterService.getMeter(userId);
  } catch (error) {
    throw customerConstants.FAILED
  }
}

const getCustomerByMail = async(email:object)=>{
  try {
    return await customerRepo.getOne(email);
  } catch (error) {
    throw customerConstants.FAILED
  }
}

const getAllCustomerMeter = async()=>{
  try {
   return await customerMeterService.getAll();
  } catch (error) {
    throw error
  }
}


export default {addCustomer,getAllCustomers,deleteCustomer,updateCustomer,assignMeter,getMeter,getCustomerByMail,getAllCustomerMeter}