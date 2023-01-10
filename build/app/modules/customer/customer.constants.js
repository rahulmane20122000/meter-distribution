"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.customerConstants = {
    CUSTOMER_ADDED: new response_handler_1.MessageHandler(200, "Customer Sucessfully Added!!!"),
    CUSTOMER_UPDATED: new response_handler_1.MessageHandler(200, "Customer Updated!!!"),
    CUSTOMER_DELETED: new response_handler_1.MessageHandler(200, "Customer Deleted!!!"),
    METER_ASSIGNED: new response_handler_1.MessageHandler(200, "Meter Sucessfully Assigned To Customer!!!"),
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!")
};
//# sourceMappingURL=customer.constants.js.map