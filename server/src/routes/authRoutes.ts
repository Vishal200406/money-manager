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


import {

registerValidator,

loginValidator

}

from "../validators/authValidator";


import {

validate

}

from "../middleware/validateMiddleware";



const router =
Router();




// Register new user

router.post(

"/register",

registerValidator,

validate,

register

);




// Login user with rate limiting

router.post(

"/login",

authLimiter,

loginValidator,

validate,

login

);




// Logout user

router.post(

"/logout",

logout

);



export default router;