"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bills_schema_1 = require("./bills.schema");
const generate = (unitsUsed, ratePerUnit, customerMeterId) => bills_schema_1.billsModel.create({ billAmount: unitsUsed * ratePerUnit, unitsUsed: unitsUsed, customerMeterId: customerMeterId });
const getOne = (cmId) => bills_schema_1.billsModel.findAll({ where: { customerMeterId: cmId } });
exports.default = { generate, getOne };
//# sourceMappingURL=bills.repo.js.map