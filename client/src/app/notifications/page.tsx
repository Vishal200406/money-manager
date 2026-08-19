"use client";


import {

useEffect,

useState

}

from "react";


import PageAnimation
from "@/components/PageAnimation";


import Card
from "@/components/ui/Card";


import NotificationCard
from "@/components/notifications/NotificationCard";


import {

getNotifications,

deleteNotification

}

from "@/lib/notificationApi";



export default function NotificationsPage(){



const [

notifications,

setNotifications

]=useState<any[]>([]);





const loadData=async()=>{


try{


const data=

await getNotifications();


setNotifications(data);


}

catch(error){


console.error(

"Notification error",

error

);


}


};





useEffect(()=>{


loadData();


},[]);







const remove=async(

id:string

)=>{


await deleteNotification(id);


loadData();


};








return (

<PageAnimation>


<div

className="
space-y-8
"

>



<div>


<h1

className="
text-3xl
font-bold
"

>

Notifications

</h1>



<p

className="
text-gray-500
mt-2
"

>

Stay updated with your financial activity.

</p>


</div>








<div

className="
space-y-5
"

>



{

notifications.length > 0

?

notifications.map(

(notification)=>(


<NotificationCard

key={notification._id}

notification={notification}

onDelete={remove}

/>


)

)


:

(

<Card>


<div

className="
text-center
py-12
"

>


<div

className="
text-5xl
"

>

🔔

</div>



<h3

className="
text-xl
font-bold
mt-4
"

>

No notifications

</h3>



<p

className="
text-gray-500
mt-2
"

>

You're all caught up.

</p>



</div>


</Card>

)

}



</div>





</div>


</PageAnimation>

);

}