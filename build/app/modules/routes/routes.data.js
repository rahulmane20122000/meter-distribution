"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const user_routes_1 = require("../user/user.routes");
const auth_routes_1 = require("../auth/auth.routes");
const routes_types_1 = require("./routes.types");
const meter_routes_1 = require("../meter/meter.routes");
const customer_routes_1 = require("../customer/customer.routes");
const readings_routes_1 = require("../readings/readings.routes");
exports.routes = [
    new routes_types_1.Route('/auth', auth_routes_1.authRouter),
    new routes_types_1.Route('/user', user_routes_1.userRouter),
    new routes_types_1.Route('/meter', meter_routes_1.meterRouter),
    new routes_types_1.Route('/customer', customer_routes_1.customerRouter),
    new routes_types_1.Route('/readings', readings_routes_1.readingRouter),
];
exports.excludedPaths = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/change-password/', method: "PUT" },
];
//# sourceMappingURL=routes.data.js.map