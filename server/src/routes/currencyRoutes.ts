import { Router } from "express";


import {

getCurrencies

}

from "../controllers/currencyController";


import {

protect

}

from "../middleware/authMiddleware";



const router =
Router();



router.get(

"/",

protect,

getCurrencies

);



export default router;