"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.createCustomerValidator = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Name is required!'),
    (0, express_validator_1.body)('email').isEmail().notEmpty().withMessage('email is required!'),
    validate_1.validate
];
//# sourceMappingURL=customer.validators.js.map