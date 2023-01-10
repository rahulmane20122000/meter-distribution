"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meter_schema_1 = require("./meter.schema");
const add = (meter) => meter_schema_1.meterModel.create(Object.assign({}, meter));
const getAll = (orderBy, field, UsersLimit, page, searchValue) => meter_schema_1.meterModel.findAll({
    limit: UsersLimit,
    offset: (page || 0) * (UsersLimit || 0),
    order: [
        [field || "", orderBy || ""]
    ],
});
const deleteOne = (id) => meter_schema_1.meterModel.destroy({ where: { id: id } });
const updateOne = (id, meter) => meter_schema_1.meterModel.update(meter, { where: { id: id } });
exports.default = { add, getAll, deleteOne, updateOne };
//# sourceMappingURL=meter.repo.js.map