import { sequelize } from "../../utility/sequelize";
import { customerMeterModel } from "../customerMeter/customerMeter.schema";
import { readingsModel } from "./readings.schema";

const add = (cmId: number, readings: any) => readingsModel.bulkCreate(readings.map((value: any) => ({ customerMeterId: cmId, units: value })));

const getAllReadings = (cmId: string) => readingsModel.findAll({ where: { customerMeterId: cmId }, include: [{ model: customerMeterModel }] });

const getAverage = (cmId: number) => readingsModel.findAll({ where: { customerMeterId: cmId }, attributes: [[sequelize.fn("AVG", sequelize.col("units")), "avgUnit"]] })

export default { add, getAllReadings, getAverage }