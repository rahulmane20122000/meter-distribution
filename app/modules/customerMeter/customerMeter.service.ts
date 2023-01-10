import { customerConstants } from "../customer/customer.constants";
import customerMeterRepo from "./customerMeter.repo"

const assignMeter = async (userId: number, meterId: number) => {
    try {
        await customerMeterRepo.assignMeter(userId, meterId);
        return customerConstants.METER_ASSIGNED
    } catch (error) {
        throw customerConstants.FAILED
    }
}

const getMeter = async (userId: string) => {
    try {
        return await customerMeterRepo.getOne(userId);
    } catch (error) {
        throw customerConstants.FAILED
    }
}


const getAll = async () => {
    try {
        return await customerMeterRepo.getAll();
    } catch (error) {
        throw customerConstants.FAILED
    }
}

const getRequiredReadings = async (cmid: string) => {
    try {
        return await customerMeterRepo.getReadingsRequired(cmid);
    } catch (error) {

        throw customerConstants.FAILED
    }
}
export default { assignMeter, getMeter, getAll, getRequiredReadings }