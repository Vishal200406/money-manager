import { Router } from "express";


import {

createRecurring,

getRecurring,

deleteRecurring

}

from "../controllers/recurringController";


import {

protect

}

from "../middleware/authMiddleware";



const router =
Router();



router.post(

"/",

protect,

createRecurring

);



router.get(

"/",

protect,

getRecurring

);



router.delete(

"/:id",

protect,

deleteRecurring

);



export default router;