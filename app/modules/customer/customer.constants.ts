import { MessageHandler } from "../../utility/response-handler";

export const customerConstants = {
    CUSTOMER_ADDED: new MessageHandler(200,"Customer Sucessfully Added!!!"),
    CUSTOMER_UPDATED: new MessageHandler(200,"Customer Updated!!!"),
    CUSTOMER_DELETED: new MessageHandler(200,"Customer Deleted!!!"),
    METER_ASSIGNED: new MessageHandler(200,"Meter Sucessfully Assigned To Customer!!!"),
    FAILED: new MessageHandler(400,"Failed To Process Request!!!")
}