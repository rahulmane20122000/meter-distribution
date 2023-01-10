"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readingsModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
const customerMeter_schema_1 = require("../customerMeter/customerMeter.schema");
exports.readingsModel = sequelize_2.sequelize.define('readings', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date
    },
    units: {
        type: sequelize_1.DataTypes.INTEGER
    },
    meterStatus: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'WORKING'
    },
    reason: {
        type: sequelize_1.DataTypes.STRING
    }
});
customerMeter_schema_1.customerMeterModel.hasMany(exports.readingsModel, { foreignKey: { name: "customerMeterId" } });
exports.readingsModel.belongsTo(customerMeter_schema_1.customerMeterModel);
// billsModel.hasOne(readingsModel,{foreignKey:{name:"billId"}});
//# sourceMappingURL=readings.schema.js.map