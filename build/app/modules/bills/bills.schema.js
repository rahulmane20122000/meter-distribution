"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billsModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
const readings_schema_1 = require("../readings/readings.schema");
exports.billsModel = sequelize_2.sequelize.define('bills', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    discount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    billAmount: {
        type: sequelize_1.DataTypes.INTEGER
    },
    unitsUsed: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
readings_schema_1.readingsModel.hasOne(exports.billsModel, { foreignKey: "customerMeterId" });
//# sourceMappingURL=bills.schema.js.map