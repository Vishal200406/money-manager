import Notification from "../models/Notification";



export const createNotification =

async(

  userId:string,

  title:string,

  message:string,

  type:
    | "budget"
    | "payment"
    | "goal"
    | "system"

)=>{


  const existingNotification =

    await Notification.findOne({

      userId,

      title,

      message,

      read:false

    });





  if(existingNotification){

    return;

  }






  await Notification.create({

    userId,

    title,

    message,

    type,

  });



};