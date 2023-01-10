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
exports.customerRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const customer_service_1 = __importDefault(require("./customer.service"));
const customer_validators_1 = require("./customer.validators");
exports.customerRouter = (0, express_1.Router)();
exports.customerRouter.get('/', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderBy = req.query.orderBy || 'ASC';
        const field = req.query.field || 'name';
        const limit = Number(req.query.limit) || 7;
        const page = Number(req.query.page) || 0;
        const searchValue = String(req.query.searchValue) || "%";
        const response = yield customer_service_1.default.getAllCustomers(orderBy, field, limit, page, searchValue);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.customerRouter.get("/get-by-mail", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN, roles_constants_1.ROLES.AGENT]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield customer_service_1.default.getCustomerByMail(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.customerRouter.get("/get-customer-meter", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield customer_service_1.default.getAllCustomerMeter();
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.customerRouter.post("/", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), customer_validators_1.createCustomerValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield customer_service_1.default.addCustomer(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.customerRouter.put("/update-customer/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield customer_service_1.default.updateCustomer(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.customerRouter.put('/assign/:id', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield customer_service_1.default.assignMeter(req.params.id, req.body.meterId);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.customerRouter.get("/customer-meter/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield customer_service_1.default.getMeter(req.params.userId);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.customerRouter.delete("/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield customer_service_1.default.deleteCustomer(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=customer.routes.js.map