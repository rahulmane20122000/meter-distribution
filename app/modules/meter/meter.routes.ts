import { NextFunction, Request, Response, Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import meterService from "./meter.service";
import { createMeterValidator } from "./meter.validators";

export const meterRouter = Router();

meterRouter.get("/", permit([ROLES.ADMIN]),async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderBy  = req.query.orderBy as string || 'ASC';
        const field = req.query.field as string || 'meterType';
        const limit = Number(req.query.limit) || 5;
        const page = Number(req.query.page) || 0; 
        const searchValue = String(req.query.searchValue) || "";
        const response = await meterService.getAllMeters(orderBy,field,limit,page,searchValue)
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

meterRouter.post('/', permit([ROLES.ADMIN]),createMeterValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await meterService.addMeter(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

meterRouter.put("/update-meter/:id", permit([ROLES.ADMIN]),async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await meterService.updateMeter(req.params.id, req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

meterRouter.delete("/:id", permit([ROLES.ADMIN]),async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await meterService.deleteMeter(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})