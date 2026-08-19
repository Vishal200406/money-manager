"use client";


import {
useEffect,
useState
} from "react";


import {
getBudgets,
createBudget,
deleteBudget
} from "@/lib/budgetApi";



export default function BudgetsPage(){


const [
budgets,
setBudgets
]=useState<any[]>([]);



const [form,setForm]=useState({

categoryId:"",

amount:"",

month:
new Date().getMonth()+1,

year:
new Date().getFullYear(),

});



const loadBudgets =
async()=>{

const data =
await getBudgets();

setBudgets(data);

};



useEffect(()=>{

loadBudgets();

},[]);




const submit =
async(
e:React.FormEvent
)=>{


e.preventDefault();


await createBudget({

...form,

amount:Number(form.amount),

});


loadBudgets();


};




return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Budgets

</h1>



<form

onSubmit={submit}

className="bg-white border rounded-xl p-6 space-y-4"

>


<input

placeholder="Category ID"

className="border p-2 rounded"

onChange={(e)=>

setForm({

...form,

categoryId:e.target.value

})

}

/>



<input

placeholder="Budget Amount"

type="number"

className="border p-2 rounded"

onChange={(e)=>

setForm({

...form,

amount:e.target.value

})

}

/>



<button

className="bg-blue-600 text-white p-2 rounded"

>

Create Budget

</button>


</form>




<div>

{
budgets.map(

budget=>(

<div

key={budget._id}

className="border p-4 mb-3 rounded"

>

{budget.categoryId?.name}

:

{budget.amount}


<button

onClick={()=>deleteBudget(budget._id)}

className="text-red-600 ml-4"

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