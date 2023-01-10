import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const createCustomerValidator = [
    body('name').isString().notEmpty().withMessage('Name is required!'),
    body('email').isEmail().notEmpty().withMessage('email is required!'),
    validate
]