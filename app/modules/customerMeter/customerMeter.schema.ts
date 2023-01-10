import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { customerModel } from "../customer/customer.schema";
import { meterModel } from "../meter/meter.schema";

export const customerMeterModel = sequelize.define('customerMeter', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

}, { timestamps: true, indexes: [{ unique: true, fields: ['customerId', 'meterId'] }] });

customerModel.hasMany(customerMeterModel);
customerMeterModel.belongsTo(customerModel);

customerMeterModel.belongsTo(meterModel);
meterModel.hasMany(customerMeterModel, {
    foreignKey: {
        name: "meterId"
    }
});
