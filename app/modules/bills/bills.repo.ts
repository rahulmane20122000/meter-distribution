import { billsModel } from "./bills.schema";

const generate = (unitsUsed:number,ratePerUnit:number,customerMeterId:string)=> billsModel.create({billAmount:unitsUsed*ratePerUnit,unitsUsed:unitsUsed,customerMeterId:customerMeterId});

const getOne=(cmId:string)=>billsModel.findAll({where:{customerMeterId:cmId}})

export default{generate,getOne}