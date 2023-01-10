"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readingConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.readingConstants = {
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!"),
    ADDED: new response_handler_1.MessageHandler(200, "Readings Added!!!"),
    LESS_READINGS: new response_handler_1.MessageHandler(200, "Number of Readings are not valid!!!")
};
//# sourceMappingURL=readings.constants.js.map