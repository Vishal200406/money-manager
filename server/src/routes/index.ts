import { Router } from "express";

import authRoutes from "./authRoutes";


const router = Router();


router.get(
"/health",
(_req,res)=>{

res.json({

status:"OK",

service:
"Money Manager API",

});

}
);


router.use(
"/auth",
authRoutes
);



export default router;