import { Router } from "express";


import {

getNotifications,

markNotificationRead,

deleteNotification

}

from "../controllers/notificationController";


import {

protect

}

from "../middleware/authMiddleware";


const router =
Router();



router.get(

"/",

protect,

getNotifications

);



router.patch(

"/:id",

protect,

markNotificationRead

);



router.delete(

"/:id",

protect,

deleteNotification

);



export default router;