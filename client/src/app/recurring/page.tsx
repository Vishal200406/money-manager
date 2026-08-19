"use client";


import {

useEffect,

useState

} from "react";


import {

getRecurring,

deleteRecurring

}

from "@/lib/recurringApi";



export default function RecurringPage(){


const [
items,
setItems
]
=
useState<any[]>([]);



const load =
async()=>{


const data =
await getRecurring();


setItems(data);


};



useEffect(()=>{

load();

},[]);



return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Recurring Payments

</h1>



{

items.map(

(item)=>(


<div

key={item._id}

className="
bg-white
border
rounded-xl
p-5
flex
justify-between
"

>


<div>

<h2 className="font-bold">

{item.description}

</h2>


<p>

{item.currency}

{" "}

{item.amount}

</p>


<p>

Every {item.frequency}

</p>


</div>



<button

onClick={()=>deleteRecurring(item._id)}

className="text-red-600"

>

Delete

</button>


</div>


)

)

}


</div>

);

}