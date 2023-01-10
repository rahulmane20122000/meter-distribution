import { customerModel } from "../customer/customer.schema";
import { meterModel } from "../meter/meter.schema";
import { customerMeterModel } from "./customerMeter.schema";

const assignMeter = (userId: number, meterId: number) => customerMeterModel.create({ customerId: userId, meterId: meterId });

const getAll = () => customerMeterModel.findAll({ include: [{ model: meterModel }, { model: customerModel }] });

const getOne = (userId: string) => customerMeterModel.findOne({ where: { id: userId }, include: [{ model: meterModel }, { model: customerModel }] });

const getReadingsRequired = (cmId:string)=>customerMeterModel.findOne({where:{id:cmId},include:{model:meterModel}})

export default { assignMeter, getOne, getAll,getReadingsRequired }