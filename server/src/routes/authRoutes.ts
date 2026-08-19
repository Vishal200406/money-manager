import { Router } from "express";


import {

  register,

  login,

  logout

}

from "../controllers/authController";


import {

  authLimiter

}

from "../middleware/rateLimiter";



const router = Router();





// ======================
// Register User
// ======================

router.post(

  "/register",

  authLimiter,

  register

);





// ======================
// Login User
// ======================

router.post(

  "/login",

  authLimiter,

  login

);





// ======================
// Logout User
// ======================

router.post(

  "/logout",

  logout

);





export default router;