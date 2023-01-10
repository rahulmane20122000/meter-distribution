"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customerMeter_schema_1 = require("../customerMeter/customerMeter.schema");
const customer_schema_1 = require("./customer.schema");
const add = (customer) => customer_schema_1.customerModel.create(Object.assign({}, customer));
const getAll = (orderBy, field, UsersLimit, page, searchValue) => customer_schema_1.customerModel.findAll({
    limit: UsersLimit,
    offset: (page || 0) * (UsersLimit || 0),
    order: [
        [field || "", orderBy || ""]
    ],
    include: [
        {
            model: customerMeter_schema_1.customerMeterModel,
        },
    ],
});
const deleteOne = (id) => customer_schema_1.customerModel.destroy({ where: { id: id } });
const updateOne = (id, updatedCustomerDetails) => customer_schema_1.customerModel.update(updatedCustomerDetails, { where: { id: id } });
const getOne = (fields) => customer_schema_1.customerModel.findOne(Object.assign({}, fields));
exports.default = { add, getAll, deleteOne, updateOne, getOne };
//# sourceMappingURL=customer.repo.js.map