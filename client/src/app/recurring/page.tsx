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


import RecurringCard
from "@/components/recurring/RecurringCard";


import {

getRecurring,

createRecurring,

deleteRecurring

}

from "@/lib/recurringApi";


import {

getCategories

}

from "@/lib/categoryApi";



export default function RecurringPage(){



const [

payments,

setPayments

]=useState<any[]>([]);



const [

categories,

setCategories

]=useState<any[]>([]);



const [

form,

setForm

]=useState({

name:"",

amount:"",

categoryId:"",

frequency:"monthly",

nextPayment:""

});





const loadData=async()=>{


const [

paymentData,

categoryData

]=await Promise.all([

getRecurring(),

getCategories()

]);



setPayments(paymentData);

setCategories(categoryData);


};






useEffect(()=>{


loadData();


},[]);









const submit=async()=>{


await createRecurring({

...form,

amount:Number(form.amount)

});



setForm({

name:"",

amount:"",

categoryId:"",

frequency:"monthly",

nextPayment:""

});



loadData();


};







const remove=async(

id:string

)=>{


await deleteRecurring(id);


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

Recurring Payments

</h1>



<p

className="
text-gray-500
mt-2
"

>

Manage your automatic monthly expenses.

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

Create Recurring Payment

</h2>





<div

className="
grid
md:grid-cols-5
gap-4
"

>


<Input

placeholder="Payment name"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>





<Input

placeholder="Amount"

type="number"

value={form.amount}

onChange={(e)=>

setForm({

...form,

amount:e.target.value

})

}

/>





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

Category

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







<Select

value={form.frequency}

onChange={(e)=>

setForm({

...form,

frequency:e.target.value

})

}

>


<option value="monthly">

Monthly

</option>


<option value="weekly">

Weekly

</option>


<option value="yearly">

Yearly

</option>


</Select>






<Input

type="date"

value={form.nextPayment}

onChange={(e)=>

setForm({

...form,

nextPayment:e.target.value

})

}

/>





<Button

onClick={submit}

>

Create

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

payments.length > 0

?

payments.map(

(payment)=>(


<RecurringCard

key={payment._id}

payment={payment}

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

🔄

</div>



<h3

className="
font-bold
text-xl
mt-4
"

>

No recurring payments

</h3>



<p

className="
text-gray-500
mt-2
"

>

Add subscriptions and repeated bills.

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