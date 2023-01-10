"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meterConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.meterConstants = {
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!"),
    METER_ADDED: new response_handler_1.MessageHandler(200, "Meter Added Sucessfully!!!"),
    METER_UPDATED: new response_handler_1.MessageHandler(200, "Meter Updated Sucessfully!!!"),
    METER_DELETED: new response_handler_1.MessageHandler(200, "Meter deleted Sucessfully!!!"),
};
//# sourceMappingURL=meter.constants.js.map