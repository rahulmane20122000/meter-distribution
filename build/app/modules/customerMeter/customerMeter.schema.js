"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerMeterModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
const customer_schema_1 = require("../customer/customer.schema");
const meter_schema_1 = require("../meter/meter.schema");
exports.customerMeterModel = sequelize_2.sequelize.define('customerMeter', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
}, { timestamps: true, indexes: [{ unique: true, fields: ['customerId', 'meterId'] }] });
customer_schema_1.customerModel.hasMany(exports.customerMeterModel);
exports.customerMeterModel.belongsTo(customer_schema_1.customerModel);
exports.customerMeterModel.belongsTo(meter_schema_1.meterModel);
meter_schema_1.meterModel.hasMany(exports.customerMeterModel, {
    foreignKey: {
        name: "meterId"
    }
});
//# sourceMappingURL=customerMeter.schema.js.map