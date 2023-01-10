import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { readingsModel } from "../readings/readings.schema";

export const billsModel = sequelize.define('bills', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    discount: {
        type: DataTypes.INTEGER,

    },
    billAmount: {
        type: DataTypes.INTEGER
    },
    unitsUsed: {
        type: DataTypes.INTEGER
    }
});

readingsModel.hasOne(billsModel, { foreignKey: "customerMeterId" });

