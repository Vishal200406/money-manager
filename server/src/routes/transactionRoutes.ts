import { Router } from "express";

import {

createTransaction,

getTransactions,

deleteTransaction,

} from "../controllers/transactionController";


import {
protect
} from "../middleware/authMiddleware";


const router =
Router();



router.post(

"/",

protect,

createTransaction

);



router.get(

"/",

protect,

getTransactions

);



router.delete(

"/:id",

protect,

deleteTransaction

);



export default router;