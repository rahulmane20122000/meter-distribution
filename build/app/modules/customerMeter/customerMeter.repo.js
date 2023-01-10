"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_schema_1 = require("../customer/customer.schema");
const meter_schema_1 = require("../meter/meter.schema");
const customerMeter_schema_1 = require("./customerMeter.schema");
const assignMeter = (userId, meterId) => customerMeter_schema_1.customerMeterModel.create({ customerId: userId, meterId: meterId });
const getAll = () => customerMeter_schema_1.customerMeterModel.findAll({ include: [{ model: meter_schema_1.meterModel }, { model: customer_schema_1.customerModel }] });
const getOne = (userId) => customerMeter_schema_1.customerMeterModel.findOne({ where: { id: userId }, include: [{ model: meter_schema_1.meterModel }, { model: customer_schema_1.customerModel }] });
const getReadingsRequired = (cmId) => customerMeter_schema_1.customerMeterModel.findOne({ where: { id: cmId }, include: { model: meter_schema_1.meterModel } });
exports.default = { assignMeter, getOne, getAll, getReadingsRequired };
//# sourceMappingURL=customerMeter.repo.js.map