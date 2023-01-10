import { MessageHandler } from "../../utility/response-handler";

export const billsConstants = {
    BILL_GENERATED: new MessageHandler(200,"Bill Generated Successfully!!!"),
    FAILED: new MessageHandler(400,"Failed To Process Request!!!")
}