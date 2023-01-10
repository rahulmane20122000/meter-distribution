import { NextFunction, Request, Response, Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import customerService from "./customer.service";
import { createCustomerValidator } from "./customer.validators";

export const customerRouter = Router();

customerRouter.get('/', permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderBy  = req.query.orderBy as string || 'ASC';
        const field = req.query.field as string || 'name';
        const limit = Number(req.query.limit) || 7;
        const page = Number(req.query.page) || 0; 
        const searchValue = String(req.query.searchValue) || "";
        const response = await customerService.getAllCustomers(orderBy,field,limit,page,searchValue);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

customerRouter.get("/get-by-mail", permit([ROLES.ADMIN, ROLES.AGENT]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customerService.getCustomerByMail(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error)
    }
});

customerRouter.get("/get-customer-meter",async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const response = await customerService.getAllCustomerMeter();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

customerRouter.post("/", permit([ROLES.ADMIN]), createCustomerValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customerService.addCustomer(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

customerRouter.put("/update-customer/:id", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customerService.updateCustomer(req.params.id, req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

customerRouter.put('/assign/:id', permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customerService.assignMeter(req.params.id, req.body.meterId);
        res.send(new ResponseHandler(response))
    } catch (error) {
        next(error);
    }
});

customerRouter.get("/customer-meter/:userId", async (req: Request, res: Response, next: NextFunction) => {
    try {

        const response = await customerService.getMeter(req.params.userId);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});
customerRouter.delete("/:id", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customerService.deleteCustomer(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})