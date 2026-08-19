import { Response } from "express";


import {

AuthRequest

}

from "../middleware/authMiddleware";


import Notification
from "../models/Notification";



// Get notifications

export const getNotifications =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const notifications =
await Notification.find({

userId

})

.sort({

createdAt:-1

});



return res.json(
notifications
);



}catch(error){


return res.status(500).json({

message:
"Failed to fetch notifications"

});


}

};




// Mark as read

export const markNotificationRead =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const notification =
await Notification.findOneAndUpdate(

{

_id:req.params.id,

userId

},

{

read:true

},

{

new:true

}

);



return res.json(
notification
);



}catch(error){


return res.status(500).json({

message:
"Failed to update notification"

});


}

};




// Delete notification

export const deleteNotification =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



await Notification.findOneAndDelete({

_id:req.params.id,

userId

});



return res.json({

message:
"Notification deleted"

});



}catch(error){


return res.status(500).json({

message:
"Failed to delete notification"

});


}

};