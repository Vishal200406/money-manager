"use client";


interface Props {

payment:any;

onDelete:(id:string)=>void;

}



export default function RecurringCard({

payment,

onDelete

}:Props){



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

{payment.name || "Recurring Payment"}

</h3>



<p

className="
text-gray-500
text-sm
mt-1
"

>

{

payment.categoryId?.name ||

"Recurring Expense"

}

</p>


</div>





<button

onClick={()=>onDelete(payment._id)}

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
mt-6
grid
grid-cols-2
gap-5
"

>


<div>


<p

className="
text-gray-500
text-sm
"

>

Amount

</p>


<p

className="
font-bold
text-lg
"

>

${payment.amount}

/

{

payment.frequency

}

</p>


</div>







<div>


<p

className="
text-gray-500
text-sm
"

>

Next Payment

</p>


<p

className="
font-bold
text-lg
"

>

{

payment.nextDate

?

new Date(

payment.nextDate

)

.toLocaleDateString()

:

"Not set"

}

</p>


</div>



</div>









<div

className="
mt-6
"

>


<span

className="
px-3
py-1
rounded-full
text-sm
bg-green-100
text-green-700
"

>

Active

</span>



</div>





</div>

);

}