import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";


export const meterModel = sequelize.define('meter',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    meterType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    faultTolerance:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    requiredReading:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    ratePerUnit:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{timestamps:true,paranoid:true});



