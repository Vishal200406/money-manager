"use client";


import {
  useEffect,
  useState
} from "react";


import {
  createTransaction,
  getTransactions,
  deleteTransaction
} from "@/lib/transactionApi";


import {
  getCategories
} from "@/lib/categoryApi";


import PageAnimation
from "@/components/PageAnimation";


import Card
from "@/components/ui/Card";


import Button
from "@/components/ui/Button";


import {
  Transaction
} from "@/types/transaction";



export default function TransactionsPage(){


const [
  transactions,
  setTransactions
] = useState<Transaction[]>([]);



const [
  categories,
  setCategories
] = useState<any[]>([]);



const [
  loading,
  setLoading
] = useState(true);



const [
  form,
  setForm
] = useState({

  type:"expense",

  amount:"",

  currency:"USD",

  description:"",

  date:
  new Date()
  .toISOString()
  .substring(0,10),

  categoryId:"",

});





const loadData =
async()=>{


try{


setLoading(true);



const [
  transactionData,
  categoryData
]
=
await Promise.all([

  getTransactions(),

  getCategories()

]);



setTransactions(
  transactionData
);



setCategories(
  categoryData
);



}

catch(error){

console.error(
"Failed loading transactions",
error
);

}

finally{

setLoading(false);

}


};





useEffect(()=>{


loadData();


},[]);







const handleSubmit =
async(
e:React.FormEvent
)=>{


e.preventDefault();



if(
!form.amount ||
!form.categoryId
){

alert(
"Please select category and enter amount"
);

return;

}



try{


await createTransaction({

...form,

amount:
Number(form.amount)

});



setForm({

type:"expense",

amount:"",

currency:"USD",

description:"",

date:
new Date()
.toISOString()
.substring(0,10),

categoryId:"",

});



loadData();



}

catch(error){

console.error(
"Failed creating transaction",
error
);

}


};








const removeTransaction =
async(
id:string
)=>{


try{


await deleteTransaction(id);


loadData();



}

catch(error){

console.error(
"Failed deleting transaction",
error
);


}


};






return (

<PageAnimation>


<div className="space-y-8">



<div>

<h1 className="
text-3xl
font-bold
">

Transactions

</h1>


<p className="
text-gray-500
mt-2
">

Track your income and expenses.

</p>


</div>





<Card>


<h2 className="
text-xl
font-semibold
mb-5
">

Add Transaction

</h2>




<form

onSubmit={handleSubmit}

className="
grid
gap-4
md:grid-cols-2
"

>



<select

value={form.type}

onChange={(e)=>

setForm({

...form,

type:e.target.value

})

}

className="
border
rounded-lg
p-3
"

>

<option value="expense">

Expense

</option>


<option value="income">

Income

</option>


</select>







<select

value={form.categoryId}

onChange={(e)=>

setForm({

...form,

categoryId:e.target.value

})

}

className="
border
rounded-lg
p-3
"

>


<option value="">

Select Category

</option>



{

categories.map(

(category)=>(


<option

key={category._id}

value={category._id}

>

{category.icon}

{" "}

{category.name}

</option>


)

)

}


</select>








<input

type="number"

placeholder="Amount"

value={form.amount}

onChange={(e)=>

setForm({

...form,

amount:e.target.value

})

}

className="
border
rounded-lg
p-3
"

 />








<select

value={form.currency}

onChange={(e)=>

setForm({

...form,

currency:e.target.value

})

}

className="
border
rounded-lg
p-3
"

>

<option>

USD

</option>


<option>

CAD

</option>


<option>

GBP

</option>


<option>

INR

</option>


</select>







<input

type="date"

value={form.date}

onChange={(e)=>

setForm({

...form,

date:e.target.value

})

}

className="
border
rounded-lg
p-3
"

/>







<input

placeholder="Description"

value={form.description}

onChange={(e)=>

setForm({

...form,

description:e.target.value

})

}

className="
border
rounded-lg
p-3
md:col-span-2
"

/>







<Button>

Save Transaction

</Button>




</form>


</Card>








<Card>


<h2 className="
text-xl
font-semibold
mb-5
">

Transaction History

</h2>





{

loading && (

<p>

Loading transactions...

</p>

)

}





{

!loading &&
transactions.length===0 && (


<div className="
text-center
py-10
text-gray-500
">


<div className="
text-5xl
">

💰

</div>


<h3 className="
text-xl
font-bold
mt-4
">

No transactions yet

</h3>


<p>

Start tracking your income and expenses.

</p>



</div>


)

}







<div className="
space-y-4
">


{

transactions.map(

(transaction)=>(


<div

key={transaction._id}

className="
border
rounded-lg
p-4
flex
justify-between
items-center
"

>



<div>


<h3 className="
font-semibold
">

{

transaction.categoryId?.icon

}

{" "}

{

transaction.categoryId?.name

}

</h3>


<p className="
text-gray-500
">

{

transaction.description ||

"No description"

}

</p>


<p className="
text-sm
">

{

new Date(
transaction.date
)
.toLocaleDateString()

}

</p>


</div>







<div className="
text-right
">


<p className="
font-bold
text-lg
">

{

transaction.type==="income"

?

"+"

:

"-"

}


{transaction.currency}

{" "}

{

transaction.amount

}

</p>



<button

onClick={()=>

removeTransaction(
transaction._id
)

}

className="
text-red-600
text-sm
mt-2
"

>

Delete

</button>



</div>





</div>


)

)

}


</div>




</Card>



</div>


</PageAnimation>

);


}