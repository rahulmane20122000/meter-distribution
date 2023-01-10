import { sendEmail } from "../../utility/email";
import billsService from "../bills/bills.service";
import customerRepo from "../customer/customer.repo";
import customerMeterRepo from "../customerMeter/customerMeter.repo";
import customerMeterService from "../customerMeter/customerMeter.service";
import { readingConstants } from "./readings.constants"
import readingsRepo from "./readings.repo"

const addReading = async (cmId: string, readings: any) => {
    try {
        const requiredReading: any = await customerMeterService.getRequiredReadings(cmId);
        if (readings.length === requiredReading.meter.requiredReading) {
            const customerMeterId = Number(cmId);
            await readingsRepo.add(customerMeterId, readings);
            return readingConstants.ADDED
        }
        throw readingConstants.LESS_READINGS
    } catch (error) {
        throw readingConstants.FAILED
    }
}


const getReadingsUsed = async (cmId: string) => {
    try {
        return await readingsRepo.getAllReadings(cmId);
    } catch (error) {
        throw readingConstants.FAILED;
    }
}

const getAverage = async (cmId: string) => {
    try {
        const customerMeterId = Number(cmId)
        return await readingsRepo.getAverage(customerMeterId);

    } catch (error) {

    }
}

const generateBill = async (customerMeterId: string) => {
    try {
        const response = await billsService.generateBill(customerMeterId);
        return response;
    } catch (error) {
        throw error
    }
}

const getBill = async (cmId: string) => {
    try {
        return await billsService.getBill(cmId);
    } catch (error) {
        throw error
    }
}

const sendBill = async (cmId: string) => {
    try {
        const bill: any = await getBill(cmId);
        const customerMeter: any = await customerMeterRepo.getOne(cmId);
        const customerEmail: any = await customerRepo.getOne(customerMeter?.dataValues.customerId);
        await sendEmail(customerEmail?.dataValues.email, "Electricity Bill", `
        hii ${customerEmail.dataValues.name},your bill is generated please pay your bill,
        Bill No : ${bill[0].dataValues.id},
        Discount : ${bill[0].dataValues.discount ? bill[0].dataValues.id : "0"},
        Grand Total : ${bill[0].dataValues.discount ? (bill[0].dataValues.billAmount) - (bill[0].dataValues.discount / 100) * bill[0].dataValues.billAmount : bill[0].dataValues.billAmount}
        Units Used : ${bill[0].dataValues.unitsUsed}
        `)
        return { bill: bill, customerMeter: customerMeter }
    } catch (error) {
        throw readingConstants.FAILED
    }
}
export default { addReading, getReadingsUsed, getAverage, generateBill, getBill, sendBill }