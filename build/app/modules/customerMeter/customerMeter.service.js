"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_constants_1 = require("../customer/customer.constants");
const customerMeter_repo_1 = __importDefault(require("./customerMeter.repo"));
const assignMeter = (userId, meterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customerMeter_repo_1.default.assignMeter(userId, meterId);
        return customer_constants_1.customerConstants.METER_ASSIGNED;
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED;
    }
});
const getMeter = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customerMeter_repo_1.default.getOne(userId);
    }
    catch (error) {
        throw error;
        // throw customerConstants.FAILED
    }
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customerMeter_repo_1.default.getAll();
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED;
    }
});
const getRequiredReadings = (cmid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customerMeter_repo_1.default.getReadingsRequired(cmid);
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED;
    }
});
exports.default = { assignMeter, getMeter, getAll, getRequiredReadings };
//# sourceMappingURL=customerMeter.service.js.map