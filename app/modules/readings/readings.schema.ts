import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { customerMeterModel } from "../customerMeter/customerMeter.schema";

export const readingsModel = sequelize.define('readings', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: new Date
    },
    units: {
        type: DataTypes.INTEGER
    },
    meterStatus: {
        type: DataTypes.STRING,
        defaultValue: 'WORKING'
    },
    reason: {
        type: DataTypes.STRING
    }

});




customerMeterModel.hasMany(readingsModel, { foreignKey: { name: "customerMeterId" } })
readingsModel.belongsTo(customerMeterModel);



