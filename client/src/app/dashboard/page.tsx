import DashboardLayout from "@/components/DashboardLayout";

import SummaryCard from "@/components/SummaryCard";


export default function DashboardPage(){


return (

<DashboardLayout>


<h1

className="
text-3xl
font-bold
mb-6
"

>

Good morning 👋

</h1>



<div

className="
grid
grid-cols-1
md:grid-cols-4
gap-5
"

>


<SummaryCard

title="Balance"

value="$0.00"

/>


<SummaryCard

title="Income"

value="$0.00"

/>


<SummaryCard

title="Expenses"

value="$0.00"

/>


<SummaryCard

title="Savings"

value="$0.00"

/>


</div>



</DashboardLayout>

);

}