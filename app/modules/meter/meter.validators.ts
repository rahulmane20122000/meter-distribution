import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const createMeterValidator = [
    body('meterType').isString().notEmpty().withMessage('meterType is required!'),
    body('faultTolerance').isNumeric().notEmpty().withMessage('faultTolerance is required!'),
    body('requiredReading').isNumeric().notEmpty().withMessage('requiredReading is required!'),
    body('ratePerUnit').isNumeric().notEmpty().withMessage('ratePerUnit is required!'),
    validate
]


