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
exports.readingRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const bills_service_1 = __importDefault(require("../bills/bills.service"));
const roles_constants_1 = require("../roles/roles.constants");
const readings_service_1 = __importDefault(require("./readings.service"));
exports.readingRouter = (0, express_1.Router)();
exports.readingRouter.post('/:cmId', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield readings_service_1.default.addReading(req.params.cmId, req.body.units);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.readingRouter.post("/generate-bill/:cmId", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield readings_service_1.default.generateBill(req.params.cmId);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.readingRouter.get("/get-bill/:cmId", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield bills_service_1.default.getBill(req.params.cmId);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.readingRouter.get("/send-bill/:cmId", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield readings_service_1.default.sendBill(req.params.cmId);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.readingRouter.get("/:rId", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield readings_service_1.default.getReadingsUsed(req.params.rId);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=readings.routes.js.map