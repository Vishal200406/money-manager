import { Router } from "express";


import {
getMonthlyReport
}
from "../controllers/reportController";


import {
protect
}
from "../middleware/authMiddleware";


const router =
Router();



router.get(

"/monthly",

protect,

getMonthlyReport

);



export default router;