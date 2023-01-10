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
const customer_constants_1 = require("./customer.constants");
const customer_repo_1 = __importDefault(require("./customer.repo"));
const addCustomer = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customer_repo_1.default.add(customer);
        return customer_constants_1.customerConstants.CUSTOMER_ADDED;
    }
    catch (error) {
        customer_constants_1.customerConstants.FAILED;
    }
});
const getAllCustomers = (orderBy, field, limit, page, searchValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(orderBy);
        return yield customer_repo_1.default.getAll(orderBy, field, limit, page, searchValue);
    }
    catch (error) {
        throw error;
    }
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customer_repo_1.default.deleteOne(id);
        return customer_constants_1.customerConstants.CUSTOMER_DELETED;
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED;
    }
});
const updateCustomer = (id, updatedCustomerDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customer_repo_1.default.updateOne(id, updatedCustomerDetails);
        return customer_constants_1.customerConstants.CUSTOMER_UPDATED;
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED;
    }
});
const assignMeter = (id, meterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(id);
        const response = yield customerMeter_service_1.default.assignMeter(userId, meterId);
        return response;
    }
    catch (error) {
        throw error;
    }
});
const getMeter = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customerMeter_service_1.default.getMeter(userId);
    }
    catch (error) {
        throw error;
        // throw customerConstants.FAILED
    }
});
const getCustomerByMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.getOne(email);
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED;
    }
});
const getAllCustomerMeter = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customerMeter_service_1.default.getAll();
    }
    catch (error) {
        throw error;
    }
});
exports.default = { addCustomer, getAllCustomers, deleteCustomer, updateCustomer, assignMeter, getMeter, getCustomerByMail, getAllCustomerMeter };
//# sourceMappingURL=customer.service.js.map