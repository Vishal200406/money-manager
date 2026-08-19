"use client";


import {

useEffect,

useState

}

from "react";


import {

Wallet,

TrendingUp,

TrendingDown,

PiggyBank

}

from "lucide-react";


import DashboardLayout
from "@/components/DashboardLayout";


import StatCard
from "@/components/dashboard/StatCard";


import QuickAction
from "@/components/dashboard/QuickAction";


import BudgetProgress
from "@/components/dashboard/BudgetProgress";


import ExpensePieChart
from "@/components/ExpensePieChart";


import IncomeExpenseChart
from "@/components/IncomeExpenseChart";


import PageAnimation
from "@/components/PageAnimation";


import {

getDashboardAnalytics

}

from "@/lib/analyticsApi";



export default function DashboardPage(){


const [

data,

setData

]=useState<any>(null);



useEffect(()=>{


getDashboardAnalytics()

.then(setData);


},[]);




if(!data){

return (

<p className="p-6">

Loading dashboard...

</p>

);

}



return (

<DashboardLayout>


<PageAnimation>


<div className="space-y-8">



<div>


<h1

className="
text-3xl
font-bold
"

>

Good morning 👋

</h1>


<p

className="
text-gray-500
mt-2
"

>

Here is your financial overview.

</p>


</div>






<div

className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
"

>


<StatCard

title="Balance"

value={`$${data.savings}`}

icon={<Wallet/>}

type="blue"

/>



<StatCard

title="Income"

value={`$${data.income}`}

icon={<TrendingUp/>}

type="green"

/>



<StatCard

title="Expenses"

value={`$${data.expenses}`}

icon={<TrendingDown/>}

type="red"

/>



<StatCard

title="Savings"

value={`$${data.savings}`}

icon={<PiggyBank/>}

type="purple"

/>



</div>








<div

className="
grid
xl:grid-cols-2
gap-6
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







<BudgetProgress

budgets={data.budgets}

/>







<div>


<h2

className="
text-xl
font-bold
mb-4
"

>

Quick Actions

</h2>



<div

className="
grid
md:grid-cols-3
gap-5
"

>


<QuickAction

title="Add Expense"

href="/transactions"

icon="💸"

/>


<QuickAction

title="View Reports"

href="/reports"

icon="📊"

/>


<QuickAction

title="Savings Goals"

href="/goals"

icon="🎯"

/>


</div>


</div>






</div>


</PageAnimation>


</DashboardLayout>

);

}