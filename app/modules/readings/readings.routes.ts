import { NextFunction, Request, Router, Response } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import billsService from "../bills/bills.service";
import { ROLES } from "../roles/roles.constants";
import readingsService from "./readings.service";

export const readingRouter = Router();

readingRouter.post('/:cmId', permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await readingsService.addReading(req.params.cmId, req.body.units);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

readingRouter.post("/generate-bill/:cmId", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await readingsService.generateBill(req.params.cmId);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

readingRouter.get("/get-bill/:cmId", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await billsService.getBill(req.params.cmId);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

readingRouter.get("/send-bill/:cmId",permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const response = await readingsService.sendBill(req.params.cmId);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})
readingRouter.get("/:rId", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await readingsService.getReadingsUsed(req.params.rId);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error)
    }
});