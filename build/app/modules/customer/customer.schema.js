"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
const user_schema_1 = require("../user/user.schema");
exports.customerModel = sequelize_2.sequelize.define('customers', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: true, paranoid: true });
exports.customerModel.belongsTo(user_schema_1.userModel, { foreignKey: "agentId" });
//# sourceMappingURL=customer.schema.js.map