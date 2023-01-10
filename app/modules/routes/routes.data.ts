

import { userRouter } from "../user/user.routes";
import { IExcludedPaths } from "../../utility/authorize";
import { authRouter } from "../auth/auth.routes";

import { Route, Routes } from "./routes.types";
import { meterRouter } from "../meter/meter.routes";
import { customerRouter } from "../customer/customer.routes";
import { readingRouter } from "../readings/readings.routes";

export const routes: Routes = [
  new Route('/auth', authRouter),
  new Route('/user', userRouter),
  new Route('/meter', meterRouter),
  new Route('/customer',customerRouter),
  new Route('/readings',readingRouter),
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/auth/login', method: "POST" },
  { path: '/auth/change-password', method: "PUT" },
  { path: '/auth/forgot-password', method: "POST" },
]
