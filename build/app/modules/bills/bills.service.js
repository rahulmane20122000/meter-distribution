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
const customerMeter_service_1 = __importDefault(require("../customerMeter/customerMeter.service"));
const readings_service_1 = __importDefault(require("../readings/readings.service"));
const bills_constants_1 = require("./bills.constants");
const bills_repo_1 = __importDefault(require("./bills.repo"));
const generateBill = (customerMeterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const averageUnits = yield readings_service_1.default.getAverage(customerMeterId);
        const ratePerUnit = yield customerMeter_service_1.default.getRequiredReadings(customerMeterId);
        const unitsUsed = Number(averageUnits[0].dataValues.avgUnit);
        yield bills_repo_1.default.generate(unitsUsed, ratePerUnit.dataValues.meter.dataValues.ratePerUnit, customerMeterId);
        return bills_constants_1.billsConstants.BILL_GENERATED;
    }
    catch (error) {
        throw bills_constants_1.billsConstants.FAILED;
    }
});
const getBill = (cmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield bills_repo_1.default.getOne(cmId);
    }
    catch (error) {
        throw bills_constants_1.billsConstants.FAILED;
    }
});
exports.default = { generateBill, getBill };
//# sourceMappingURL=bills.service.js.map