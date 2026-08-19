"use client";


import {

useEffect,

useState

}

from "react";


import {

useRouter

}

from "next/navigation";


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



import {

useAuth

}

from "@/context/AuthContext";





export default function DashboardPage(){



const router = useRouter();



const {

user,

loading:userLoading

}

=

useAuth();





const [

data,

setData

]

=

useState<any>(null);



const [

loading,

setLoading

]

=

useState(true);






// Protect dashboard route

useEffect(()=>{


if(!userLoading && !user){


router.replace("/login");


}


},[

user,

userLoading,

router

]);







// Load dashboard data only when user exists

useEffect(()=>{


if(!user){

return;

}



const loadDashboard = async()=>{


try{


const result =

await getDashboardAnalytics();



setData(result);



}

catch(error){


console.error(

"Dashboard error",

error

);


}

finally{


setLoading(false);


}



};



loadDashboard();



},[user]);









if(

userLoading ||

loading ||

!user

){


return (

<DashboardLayout>


<p className="p-6">

Loading dashboard...

</p>


</DashboardLayout>

);


}









if(!data){


return (

<DashboardLayout>


<PageAnimation>


<p className="p-6 text-gray-500">

Unable to load dashboard data.

</p>


</PageAnimation>


</DashboardLayout>

);


}









return (


<DashboardLayout>


<PageAnimation>


<div

className="
space-y-8
"

>





{/* Header */}

<div>


<h1

className="
text-3xl
font-bold
"

>


Good morning{" "}


{

user?.name?.split(" ")[0]

||

"there"

}


👋



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











{/* Summary Cards */}


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

value={

`$${

data.balance ||

data.savings ||

0

}`

}

icon={<Wallet/>}

type="blue"

/>






<StatCard

title="Income"

value={

`$${data.income || 0}`

}

icon={<TrendingUp/>}

type="green"

/>







<StatCard

title="Expenses"

value={

`$${data.expenses || 0}`

}

icon={<TrendingDown/>}

type="red"

/>







<StatCard

title="Savings"

value={

`$${data.savings || 0}`

}

icon={<PiggyBank/>}

type="purple"

/>





</div>









{/* Charts */}



<div

className="
grid
xl:grid-cols-2
gap-6
"

>



<ExpensePieChart

data={

data.categoryExpenses || []

}

/>





<IncomeExpenseChart

income={

data.income || 0

}

expenses={

data.expenses || 0

}

/>



</div>









{/* Budgets */}



{

data.budgets &&

data.budgets.length > 0

&&

(

<BudgetProgress

budgets={data.budgets}

/>

)

}









{/* Quick Actions */}



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