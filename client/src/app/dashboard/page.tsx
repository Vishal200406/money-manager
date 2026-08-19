"use client";


import {
useEffect,
useState
} from "react";


import DashboardLayout
from "@/components/DashboardLayout";


import SummaryCard
from "@/components/SummaryCard";


import {
getDashboardAnalytics
}
from "@/lib/analyticsApi";


import BudgetAlert
from "@/components/BudgetAlert";



export default function DashboardPage(){


const [data,setData]
=
useState<any>(null);



useEffect(()=>{

getDashboardAnalytics()

.then(setData);


},[]);



if(!data){

return (

<p>

Loading dashboard...

</p>

);

}



return (

<DashboardLayout>


<h1 className="text-3xl font-bold mb-6">

Financial Overview

</h1>



<div className="grid md:grid-cols-3 gap-5">


<SummaryCard

title="Income"

value={`$${data.income}`}

/>


<SummaryCard

title="Expenses"

value={`$${data.expenses}`}

/>


<SummaryCard

title="Savings"

value={`$${data.savings}`}

/>


</div>




<div className="mt-8 space-y-4">


{

data.budgetStatus.map(

(item:any)=>(


<BudgetAlert

key={
item.category._id
}

category={
item.category.name
}

percentage={
item.percentage
}

status={
item.status
}

/>


)

)

}


</div>



</DashboardLayout>

);


}