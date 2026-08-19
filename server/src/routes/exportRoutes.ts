import { Router } from "express";


import {

exportPDF,

exportExcel

}

from "../controllers/exportController";


import {

protect

}

from "../middleware/authMiddleware";



const router =
Router();



router.get(

"/pdf",

protect,

exportPDF

);



router.get(

"/excel",

protect,

exportExcel

);



export default router;