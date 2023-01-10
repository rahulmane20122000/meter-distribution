import { Op } from "sequelize";
import { meterModel } from "./meter.schema";
import { IMeter } from "./meter.types";

const add = (meter: IMeter) => meterModel.create({ ...meter });

const getAll = (orderBy?: string, field?: string, UsersLimit?: number, page?: number, searchValue?: string) => meterModel.findAll({

    limit: UsersLimit,
    offset: (page || 0) * (UsersLimit || 0),
    order: [
        [field || "", orderBy || ""]
    ],
});

const deleteOne = (id: string) => meterModel.destroy({ where: { id: id } });

const updateOne = (id: string, meter: any) => meterModel.update(meter, { where: { id: id } });

export default { add, getAll, deleteOne, updateOne }