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
const meter_constants_1 = require("./meter.constants");
const meter_repo_1 = __importDefault(require("./meter.repo"));
const addMeter = (meter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield meter_repo_1.default.add(meter);
        return meter_constants_1.meterConstants.METER_ADDED;
    }
    catch (error) {
        throw meter_constants_1.meterConstants.FAILED;
    }
});
const getAllMeters = (orderBy, field, limit, page, searchValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield meter_repo_1.default.getAll(orderBy, field, limit, page, searchValue);
    }
    catch (error) {
        throw error;
        //  throw meterConstants.FAILED;
    }
});
const deleteMeter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield meter_repo_1.default.deleteOne(id);
        return meter_constants_1.meterConstants.METER_DELETED;
    }
    catch (error) {
        throw meter_constants_1.meterConstants.FAILED;
    }
});
const updateMeter = (id, meter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield meter_repo_1.default.updateOne(id, meter);
        return meter_constants_1.meterConstants.METER_UPDATED;
    }
    catch (error) {
        throw meter_constants_1.meterConstants.FAILED;
    }
});
exports.default = { addMeter, getAllMeters, deleteMeter, updateMeter };
//# sourceMappingURL=meter.service.js.map