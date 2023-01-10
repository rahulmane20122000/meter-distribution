"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meterModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
exports.meterModel = sequelize_2.sequelize.define('meter', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    meterType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    faultTolerance: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    requiredReading: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    ratePerUnit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: true, paranoid: true });
//# sourceMappingURL=meter.schema.js.map