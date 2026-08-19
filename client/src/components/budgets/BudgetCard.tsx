"use client";


import Progress
from "@/components/ui/Progress";


interface Props {

budget:any;

onDelete:(id:string)=>void;

}



export default function BudgetCard({

budget,

onDelete

}:Props){



const percentage =

budget.limit > 0

?

(

budget.spent /

budget.limit

)

*100

:

0;




const exceeded =

percentage > 100;




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

budget.categoryId?.name ||

"Category"

}

</h3>


<p

className="
text-sm
text-gray-500
mt-1
"

>

Monthly Budget

</p>


</div>





<button

onClick={()=>onDelete(budget._id)}

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
grid-cols-3
gap-4
mt-6
"

>


<div>


<p className="
text-gray-500
text-sm
">

Limit

</p>


<p className="
font-bold
text-lg
">

${budget.limit}

</p>


</div>





<div>


<p className="
text-gray-500
text-sm
">

Spent

</p>


<p className="
font-bold
text-lg
">

${budget.spent || 0}

</p>


</div>





<div>


<p className="
text-gray-500
text-sm
">

Remaining

</p>


<p

className={`

font-bold

text-lg

${

exceeded

?

"text-red-600"

:

"text-green-600"

}

`}

>

$

{

Math.max(

budget.limit -

(budget.spent || 0),

0

)

}

</p>


</div>


</div>








<div className="
mt-6
">


<Progress

value={percentage}

/>


<p

className={`

text-sm

mt-2

${

exceeded

?

"text-red-600"

:

"text-gray-500"

}

`}

>

{

exceeded

?

"Budget exceeded"

:

`${Math.round(percentage)}% used`

}


</p>



</div>



</div>

);

}