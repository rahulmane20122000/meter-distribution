"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitsModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
exports.unitsModel = sequelize_2.sequelize.define('units', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    readings: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
//# sourceMappingURL=units.schema.js.map