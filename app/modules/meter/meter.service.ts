import { meterConstants } from "./meter.constants";
import meterRepo from "./meter.repo";
import { IMeter } from "./meter.types";

const addMeter = async(meter:IMeter)=>{
    try {
        await meterRepo.add(meter)
        return meterConstants.METER_ADDED;
    } catch (error) {
        throw meterConstants.FAILED
    }
}

const getAllMeters = async(orderBy?:string,field?:string,limit?:number,page?:number,searchValue?:string)=>{
    try {
        return await meterRepo.getAll(orderBy,field,limit,page,searchValue);
    } catch (error) {
     throw meterConstants.FAILED;
        
    }
}

const deleteMeter = async(id:string)=>{
    try {
        await meterRepo.deleteOne(id);
        return meterConstants.METER_DELETED
    } catch (error) {
        throw meterConstants.FAILED
    }
}

const updateMeter = async(id:string,meter:any)=>{
try {
    await meterRepo.updateOne(id,meter);
    return meterConstants.METER_UPDATED
} catch (error) {
    throw meterConstants.FAILED
}
}
export default {addMeter,getAllMeters,deleteMeter,updateMeter}