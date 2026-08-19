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


import {
Transaction
} from "@/types/transaction";



export default function TransactionsPage(){


const [transactions,setTransactions]
=
useState<Transaction[]>([]);



const [categories,setCategories]
=
useState<any[]>([]);



const [form,setForm]
=
useState({

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





const loadData = async()=>{


const transactionData =
await getTransactions();


const categoryData =
await getCategories();



setTransactions(
transactionData
);


setCategories(
categoryData
);


};





useEffect(()=>{

loadData();

},[]);






const handleSubmit =
async(
e:React.FormEvent
)=>{


e.preventDefault();



await createTransaction({

...form,

amount:
Number(form.amount),

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



};






return (

<div className="space-y-8">


<h1 className="text-3xl font-bold">

Transactions

</h1>



<div className="bg-white border rounded-xl p-6">


<form

onSubmit={handleSubmit}

className="grid gap-4"

>


<select

value={form.categoryId}

onChange={(e)=>

setForm({

...form,

categoryId:e.target.value

})

}

className="border p-2 rounded"

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





<select

value={form.type}

onChange={(e)=>

setForm({

...form,

type:e.target.value

})

}

className="border p-2 rounded"

>

<option value="expense">
Expense
</option>


<option value="income">
Income
</option>


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

className="border p-2 rounded"

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

className="border p-2 rounded"

/>





<button

className="bg-blue-600 text-white p-2 rounded"

>

Save

</button>



</form>


</div>





<div className="bg-white border rounded-xl p-6">


<h2 className="font-bold text-xl">

History

</h2>



{
transactions.map(

(transaction)=>(


<div

key={transaction._id}

className="border-b py-3 flex justify-between"

>


<div>

{transaction.categoryId?.icon}

{" "}

{transaction.categoryId?.name}


<br/>


{transaction.description}


</div>



<div>

{transaction.currency}

{" "}

{transaction.amount}


</div>



<button

onClick={()=>deleteTransaction(transaction._id)}

className="text-red-600"

>

Delete

</button>



</div>


)

)

}


</div>


</div>

);

}