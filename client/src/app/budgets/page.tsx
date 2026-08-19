"use client";


import {

useEffect,

useState

}

from "react";


import PageAnimation
from "@/components/PageAnimation";


import Card
from "@/components/ui/Card";


import Input
from "@/components/ui/Input";


import Select
from "@/components/ui/Select";


import Button
from "@/components/ui/Button";


import BudgetCard
from "@/components/budgets/BudgetCard";


import {

getBudgets,

createBudget,

deleteBudget

}

from "@/lib/budgetApi";


import {

getCategories

}

from "@/lib/categoryApi";



export default function BudgetsPage(){



const [

budgets,

setBudgets

]=useState<any[]>([]);



const [

categories,

setCategories

]=useState<any[]>([]);



const [

form,

setForm

]=useState({

categoryId:"",

limit:""

});





const loadData=async()=>{


const [

budgetData,

categoryData

]=await Promise.all([

getBudgets(),

getCategories()

]);



setBudgets(

budgetData

);



setCategories(

categoryData

);



};





useEffect(()=>{


loadData();


},[]);







const submit=async()=>{


if(

!form.categoryId ||

!form.limit

)return;



await createBudget({

categoryId:

form.categoryId,

limit:

Number(form.limit)

});



setForm({

categoryId:"",

limit:""

});



loadData();


};







const remove=async(

id:string

)=>{


await deleteBudget(id);


loadData();


};






return (

<PageAnimation>


<div

className="
space-y-8
"

>



<div>


<h1

className="
text-3xl
font-bold
"

>

Budgets

</h1>


<p

className="
text-gray-500
mt-2
"

>

Control your spending and stay within limits.

</p>


</div>








<Card>


<h2

className="
text-xl
font-bold
mb-5
"

>

Create Budget

</h2>



<div

className="
grid
md:grid-cols-3
gap-4
"

>



<Select

value={form.categoryId}

onChange={(e)=>

setForm({

...form,

categoryId:e.target.value

})

}

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

{category.name}

</option>


)

)

}



</Select>






<Input

placeholder="Monthly limit"

type="number"

value={form.limit}

onChange={(e)=>

setForm({

...form,

limit:e.target.value

})

}

/>






<Button

onClick={submit}

>

Create Budget

</Button>



</div>


</Card>









<div

className="
grid
md:grid-cols-2
gap-6
"

>


{

budgets.length > 0

?

budgets.map(

(budget)=>(


<BudgetCard

key={budget._id}

budget={budget}

onDelete={remove}

/>


)

)


:

(

<Card>


<div

className="
text-center
py-10
"

>


<div

className="
text-5xl
"

>

💰

</div>



<h3

className="
text-xl
font-bold
mt-4
"

>

No budgets yet

</h3>



<p

className="
text-gray-500
mt-2
"

>

Create your first budget to track spending.

</p>



</div>


</Card>

)

}


</div>





</div>


</PageAnimation>

);

}