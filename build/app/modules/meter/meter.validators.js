"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMeterValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.createMeterValidator = [
    (0, express_validator_1.body)('meterType').isString().notEmpty().withMessage('meterType is required!'),
    (0, express_validator_1.body)('faultTolerance').isNumeric().notEmpty().withMessage('faultTolerance is required!'),
    (0, express_validator_1.body)('requiredReading').isNumeric().notEmpty().withMessage('requiredReading is required!'),
    (0, express_validator_1.body)('ratePerUnit').isNumeric().notEmpty().withMessage('ratePerUnit is required!'),
    validate_1.validate
];
//# sourceMappingURL=meter.validators.js.map