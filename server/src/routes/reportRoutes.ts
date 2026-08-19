import express from "express";


import {

getReports

}

from "../controllers/reportController";


import {

protect

}

from "../middleware/authMiddleware";



const router = express.Router();



router.get(

"/",

protect,

getReports

);



export default router;