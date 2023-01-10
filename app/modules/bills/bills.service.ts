import customerMeterService from "../customerMeter/customerMeter.service";
import readingsService from "../readings/readings.service"
import { billsConstants } from "./bills.constants";
import billsRepo from "./bills.repo";

const generateBill = async (customerMeterId: string) => {
    try {
        const averageUnits: any = await readingsService.getAverage(customerMeterId);
        const ratePerUnit: any = await customerMeterService.getRequiredReadings(customerMeterId);
        const unitsUsed = Number(averageUnits[0].dataValues.avgUnit);
        await billsRepo.generate(unitsUsed,ratePerUnit.dataValues.meter.dataValues.ratePerUnit, customerMeterId)
        return billsConstants.BILL_GENERATED
    } catch (error) {
        throw billsConstants.FAILED
    }
}

const getBill = async(cmId:string)=>{
    try {
        return await billsRepo.getOne(cmId);
    } catch (error) {

        throw billsConstants.FAILED
    }
}

export default { generateBill,getBill }