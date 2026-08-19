"use client";


import Progress
from "@/components/ui/Progress";



interface Props {

goal:any;

onDelete:(id:string)=>void;

onAddMoney:(goal:any)=>void;

}



export default function GoalCard({

goal,

onDelete,

onAddMoney

}:Props){



const percentage =

goal.targetAmount > 0

?

(

goal.savedAmount /

goal.targetAmount

)

*100

:

0;





return (

<div

className="
bg-white
rounded-2xl
border
shadow-card
p-6
hover:shadow-lg
transition
"

>


<div

className="
flex
justify-between
items-start
"

>


<div>


<h3

className="
text-xl
font-bold
"

>

{

goal.name

}

</h3>



<p

className="
text-gray-500
text-sm
mt-1
"

>

Savings Goal

</p>


</div>



<button

onClick={()=>onDelete(goal._id)}

className="
text-red-600
text-sm
hover:underline
"

>

Delete

</button>


</div>








<div

className="
grid
grid-cols-2
gap-5
mt-6
"

>


<div>


<p

className="
text-gray-500
text-sm
"

>

Target

</p>


<p

className="
font-bold
text-lg
"

>

$

{goal.targetAmount}

</p>


</div>





<div>


<p

className="
text-gray-500
text-sm
"

>

Saved

</p>


<p

className="
font-bold
text-lg
text-green-600
"

>

$

{goal.savedAmount || 0}

</p>


</div>



</div>








<div

className="
mt-6
"

>


<Progress

value={percentage}

/>



<p

className="
text-sm
text-gray-500
mt-2
"

>

{

Math.round(percentage)

}%

completed

</p>



</div>









{

goal.deadline &&

(

<p

className="
text-sm
text-gray-500
mt-5
"

>

📅 Deadline:

{" "}

{

new Date(

goal.deadline

)

.toLocaleDateString()

}

</p>

)

}









<button

onClick={()=>onAddMoney(goal)}

className="
mt-5
w-full
rounded-xl
bg-blue-600
text-white
py-3
font-semibold
hover:bg-blue-700
transition
"

>

Add Money

</button>



</div>

);

}