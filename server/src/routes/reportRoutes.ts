import express from "express";


import {

  getReports,

  exportPDF,

  exportExcel

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





router.get(

  "/export/pdf",

  protect,

  exportPDF

);





router.get(

  "/export/excel",

  protect,

  exportExcel

);




export default router;