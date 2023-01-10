import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { userModel } from "../user/user.schema";


export const customerModel = sequelize.define('customers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },


}, { timestamps: true, paranoid: true })



customerModel.belongsTo(userModel, { foreignKey: "agentId" });




