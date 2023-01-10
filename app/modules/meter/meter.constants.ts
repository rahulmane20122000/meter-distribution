import { MessageHandler } from "../../utility/response-handler";

export const meterConstants = {
    FAILED: new MessageHandler(400,"Failed To Process Request!!!"),
    METER_ADDED: new MessageHandler(200,"Meter Added Sucessfully!!!"),
    METER_UPDATED: new MessageHandler(200,"Meter Updated Sucessfully!!!"),
    METER_DELETED: new MessageHandler(200,"Meter deleted Sucessfully!!!"),

}