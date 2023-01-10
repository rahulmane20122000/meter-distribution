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
exports.meterRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const meter_service_1 = __importDefault(require("./meter.service"));
const meter_validators_1 = require("./meter.validators");
exports.meterRouter = (0, express_1.Router)();
exports.meterRouter.get("/", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderBy = req.query.orderBy || 'ASC';
        const field = req.query.field || 'meterType';
        const limit = Number(req.query.limit) || 5;
        const page = Number(req.query.page) || 0;
        const searchValue = String(req.query.searchValue) || "";
        const response = yield meter_service_1.default.getAllMeters(orderBy, field, limit, page, searchValue);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.meterRouter.post('/', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), meter_validators_1.createMeterValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield meter_service_1.default.addMeter(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.meterRouter.put("/update-meter/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield meter_service_1.default.updateMeter(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.meterRouter.delete("/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield meter_service_1.default.deleteMeter(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=meter.routes.js.map