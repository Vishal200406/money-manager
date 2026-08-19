"use client";


import {

useEffect,

useState

} from "react";


import DashboardLayout

from "@/components/DashboardLayout";


import SummaryCard

from "@/components/SummaryCard";


import ExpensePieChart

from "@/components/ExpensePieChart";


import IncomeExpenseChart

from "@/components/IncomeExpenseChart";


import SavingsCard

from "@/components/SavingsCard";


import {

getDashboardAnalytics

}

from "@/lib/analyticsApi";



export default function DashboardPage(){


const [data,setData]=

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


<h1

className="
text-3xl
font-bold
mb-6
"

>

Financial Dashboard

</h1>




<div

className="
grid
md:grid-cols-4
gap-5
"

>


<SummaryCard

title="Income"

value={`$${data.income}`}

/>



<SummaryCard

title="Expenses"

value={`$${data.expenses}`}

/>



<SummaryCard

title="Balance"

value={`$${data.savings}`}

/>



<SavingsCard

income={data.income}

expenses={data.expenses}

/>


</div>





<div

className="
grid
md:grid-cols-2
gap-6
mt-8
"

>


<ExpensePieChart

data={data.categoryExpenses}

/>



<IncomeExpenseChart

income={data.income}

expenses={data.expenses}

/>



</div>



</DashboardLayout>

);

}