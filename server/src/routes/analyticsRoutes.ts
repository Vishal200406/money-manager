import { Router } from "express";

import {
  getDashboardAnalytics
} from "../controllers/analyticsController";

import {
  protect
} from "../middleware/authMiddleware";


const router = Router();



router.get(

  "/dashboard",

  protect,

  getDashboardAnalytics

);



export default router;