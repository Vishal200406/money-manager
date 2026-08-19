"use client";


import {
useEffect,
useState
}
from "react";


import {
getMonthlyReport
}
from "@/lib/reportApi";


import ReportCard
from "@/components/ReportCard";



export default function ReportsPage(){


const [report,setReport]
=
useState<any>(null);



useEffect(()=>{


getMonthlyReport(

new Date().getMonth()+1,

new Date().getFullYear()

)

.then(setReport);



},[]);



if(!report){

return <p>
Loading report...
</p>

}



return (

<div className="space-y-8">


<h1 className="
text-3xl
font-bold
">

Monthly Report

</h1>




<div className="
grid
md:grid-cols-3
gap-5
">


<ReportCard

title="Income"

value={`$${report.income}`}

/>


<ReportCard

title="Expenses"

value={`$${report.expenses}`}

/>


<ReportCard

title="Savings"

value={`$${report.savings}`}

/>


</div>


</div>

);


}