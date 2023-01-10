"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billsConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.billsConstants = {
    BILL_GENERATED: new response_handler_1.MessageHandler(200, "Bill Generated Successfully!!!"),
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!")
};
//# sourceMappingURL=bills.constants.js.map