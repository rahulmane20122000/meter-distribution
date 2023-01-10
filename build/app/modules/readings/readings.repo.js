"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../../utility/sequelize");
const customerMeter_schema_1 = require("../customerMeter/customerMeter.schema");
const readings_schema_1 = require("./readings.schema");
const add = (cmId, readings) => readings_schema_1.readingsModel.bulkCreate(readings.map((value) => ({ customerMeterId: cmId, units: value })));
const getAllReadings = (cmId) => readings_schema_1.readingsModel.findAll({ where: { customerMeterId: cmId }, include: [{ model: customerMeter_schema_1.customerMeterModel }] });
const getAverage = (cmId) => readings_schema_1.readingsModel.findAll({ where: { customerMeterId: cmId }, attributes: [[sequelize_1.sequelize.fn("AVG", sequelize_1.sequelize.col("units")), "avgUnit"]] });
exports.default = { add, getAllReadings, getAverage };
//# sourceMappingURL=readings.repo.js.map