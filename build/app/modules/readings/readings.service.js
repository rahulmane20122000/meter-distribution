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
const email_1 = require("../../utility/email");
const bills_service_1 = __importDefault(require("../bills/bills.service"));
const customer_repo_1 = __importDefault(require("../customer/customer.repo"));
const customerMeter_repo_1 = __importDefault(require("../customerMeter/customerMeter.repo"));
const customerMeter_service_1 = __importDefault(require("../customerMeter/customerMeter.service"));
const readings_constants_1 = require("./readings.constants");
const readings_repo_1 = __importDefault(require("./readings.repo"));
const addReading = (cmId, readings) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requiredReading = yield customerMeter_service_1.default.getRequiredReadings(cmId);
        if (readings.length === requiredReading.meter.requiredReading) {
            const customerMeterId = Number(cmId);
            yield readings_repo_1.default.add(customerMeterId, readings);
            return readings_constants_1.readingConstants.ADDED;
        }
        throw readings_constants_1.readingConstants.LESS_READINGS;
    }
    catch (error) {
        throw error;
        throw readings_constants_1.readingConstants.FAILED;
    }
});
const getReadingsUsed = (cmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield readings_repo_1.default.getAllReadings(cmId);
    }
    catch (error) {
        throw readings_constants_1.readingConstants.FAILED;
    }
});
const getAverage = (cmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customerMeterId = Number(cmId);
        return yield readings_repo_1.default.getAverage(customerMeterId);
    }
    catch (error) {
    }
});
const generateBill = (customerMeterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield bills_service_1.default.generateBill(customerMeterId);
        return response;
    }
    catch (error) {
        throw error;
    }
});
const getBill = (cmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield bills_service_1.default.getBill(cmId);
    }
    catch (error) {
        throw error;
    }
});
const sendBill = (cmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bill = yield getBill(cmId);
        const customerMeter = yield customerMeter_repo_1.default.getOne(cmId);
        const customerEmail = yield customer_repo_1.default.getOne(customerMeter === null || customerMeter === void 0 ? void 0 : customerMeter.dataValues.customerId);
        yield (0, email_1.sendEmail)(customerEmail === null || customerEmail === void 0 ? void 0 : customerEmail.dataValues.email, "Electricity Bill", `
        hii ${customerEmail.dataValues.name},your bill is generated please pay your bill,
        Bill No : ${bill[0].dataValues.id},
        Discount : ${bill[0].dataValues.discount ? bill[0].dataValues.id : "0"},
        Grand Total : ${bill[0].dataValues.discount ? (bill[0].dataValues.billAmount) - (bill[0].dataValues.discount / 100) * bill[0].dataValues.billAmount : bill[0].dataValues.billAmount}
        Units Used : ${bill[0].dataValues.unitsUsed}
        `);
        return { bill: bill, customerMeter: customerMeter };
    }
    catch (error) {
        throw readings_constants_1.readingConstants.FAILED;
    }
});
exports.default = { addReading, getReadingsUsed, getAverage, generateBill, getBill, sendBill };
//# sourceMappingURL=readings.service.js.map