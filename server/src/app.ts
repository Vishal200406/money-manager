import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import { env } from "./config/env";
import apiRoutes from "./routes";


const app = express();


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
"/api",
apiRoutes
);



app.get(
"/",
(_req,res)=>{

res.json({

message:
"Money Manager API is running",

environment:
env.NODE_ENV,

});

}
);



export default app;