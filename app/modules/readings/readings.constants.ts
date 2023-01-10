import { MessageHandler } from "../../utility/response-handler";

export const readingConstants= {
    FAILED: new MessageHandler(400,"Failed To Process Request!!!"),
    ADDED: new MessageHandler(200,"Readings Added!!!"),
    LESS_READINGS: new MessageHandler(200,"Number of Readings are not valid!!!")
}