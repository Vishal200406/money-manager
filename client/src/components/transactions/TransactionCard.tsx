interface Props {

transaction:any;

onDelete:(id:string)=>void;

}



export default function TransactionCard({

transaction,

onDelete

}:Props){



const income =
transaction.type==="income";



return (

<div

className="
bg-white
rounded-2xl
border
p-5
flex
justify-between
items-center
hover:shadow-md
transition
"

>



<div

className="
flex
items-center
gap-4
"

>


<div

className={`

w-12

h-12

rounded-xl

flex

items-center

justify-center

text-xl

${

income

?

"bg-green-100"

:

"bg-red-100"

}

`}

>

{

transaction.categoryId?.icon ||

"💰"

}

</div>



<div>


<h3

className="
font-semibold
"

>

{

transaction.categoryId?.name

}

</h3>


<p

className="
text-sm
text-gray-500
"

>

{

transaction.description ||

"No description"

}

</p>


</div>


</div>






<div

className="
text-right
"

>


<p

className={`

font-bold

text-lg

${

income

?

"text-green-600"

:

"text-red-600"

}

`}

>


{

income

?

"+"

:

"-"

}


{transaction.currency}

{" "}

{transaction.amount}


</p>



<button

onClick={()=>onDelete(transaction._id)}

className="
text-sm
text-red-600
hover:underline
"

>

Delete

</button>



</div>



</div>

);

}