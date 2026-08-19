"use client";


import {

useEffect,

useState

}

from "react";


import {

getGoals,

deleteGoal

}

from "@/lib/savingsGoalApi";



export default function GoalsPage(){


const [

goals,

setGoals

]=useState<any[]>([]);



const loadGoals =
async()=>{


const data =
await getGoals();


setGoals(data);


};



useEffect(()=>{

loadGoals();

},[]);



return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Savings Goals

</h1>



{

goals.map(

(goal)=>(


<div

key={goal._id}

className="
bg-white
border
rounded-xl
p-6
"

>


<h2 className="font-bold text-xl">

{goal.name}

</h2>



<p>

Saved:

{goal.currency}

{" "}

{goal.currentAmount}

</p>



<p>

Target:

{goal.currency}

{" "}

{goal.targetAmount}

</p>




<div

className="
w-full
bg-gray-200
rounded-full
h-3
mt-4
"

>


<div

className="
bg-blue-600
h-3
rounded-full
"

style={{

width:

`${

Math.min(

(goal.currentAmount /

goal.targetAmount)

*

100,

100

)

}%`

}}


/>


</div>



<button

onClick={()=>deleteGoal(goal._id)}

className="
text-red-600
mt-4
"

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