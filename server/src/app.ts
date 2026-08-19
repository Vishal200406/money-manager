import express from "express";

import cors from "cors";

import helmet from "helmet";

import cookieParser from "cookie-parser";


import {

env

}

from "./config/env";


import apiRoutes from "./routes";


import {

apiLimiter

}

from "./middleware/rateLimiter";


import {

errorMiddleware

}

from "./middleware/errorMiddleware";





const app = express();



// Required when running behind Vercel / proxy

app.set(
  "trust proxy",
  1
);





app.use(

helmet()

);





app.use(

cors({

origin:

env.CLIENT_URL,

credentials:true,

})

);





app.use(

express.json()

);





app.use(

cookieParser()

);





app.use(

apiLimiter

);





app.use(

"/api",

apiRoutes

);





app.use(

errorMiddleware

);





export default app;