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
Transaction
} from "@/types/transaction";



export default function TransactionsPage(){


const [transactions,setTransactions]=
useState<Transaction[]>([]);



const [form,setForm]=useState({

type:"expense",

amount:"",

currency:"USD",

description:"",

date:
new Date()
.toISOString()
.substring(0,10),

});



const loadTransactions =
async()=>{

const data =
await getTransactions();

setTransactions(data);

};



useEffect(()=>{

loadTransactions();

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

categoryId:
"000000000000000000000000"

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

});


loadTransactions();

};




const removeTransaction =
async(
id:string
)=>{


await deleteTransaction(id);


loadTransactions();


};




return (

<div className="space-y-8">


<h1 className="
text-3xl
font-bold
">

Transactions

</h1>



<div className="
bg-white
border
rounded-xl
p-6
">


<h2 className="
text-xl
font-semibold
mb-4
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
rounded
p-2
"

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

className="
border
rounded
p-2
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
rounded
p-2
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
rounded
p-2
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
rounded
p-2
"

/>




<button

className="
bg-blue-600
text-white
rounded
p-2
"

>

Save Transaction

</button>



</form>


</div>





<div className="
bg-white
border
rounded-xl
p-6
">


<h2 className="
text-xl
font-semibold
mb-4
">

History

</h2>




<table className="
w-full
">

<thead>

<tr
className="
border-b
text-left
"
>

<th>
Date
</th>

<th>
Type
</th>

<th>
Amount
</th>

<th>
Description
</th>

<th>
Action
</th>


</tr>

</thead>



<tbody>


{
transactions.map(

(transaction)=>(


<tr
key={transaction._id}
className="
border-b
"
>


<td>
{
new Date(
transaction.date
)
.toLocaleDateString()
}
</td>


<td>
{
transaction.type
}
</td>


<td>
{
transaction.currency
}

{" "}
{
transaction.amount
}

</td>


<td>
{
transaction.description
}

</td>



<td>

<button

onClick={()=>

removeTransaction(
transaction._id
)

}

className="
text-red-600
"

>

Delete

</button>

</td>



</tr>


)

)

}



</tbody>


</table>



</div>



</div>

);

}