"use client";


import {

useEffect,

useState

}

from "react";


import {

getNotifications

}

from "@/lib/notificationApi";



export default function NotificationsPage(){


const [

notifications,

setNotifications

]=useState<any[]>([]);



useEffect(()=>{


getNotifications()

.then(setNotifications);



},[]);



return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Notifications

</h1>



{

notifications.map(

(item)=>(


<div

key={item._id}

className="
bg-white
border
rounded-xl
p-5
"

>


<h2 className="font-bold">

{item.title}

</h2>


<p>

{item.message}

</p>


</div>


)

)

}



</div>

);

}