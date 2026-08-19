"use client";


import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

Legend,

ResponsiveContainer

} from "recharts";



interface Props {

income:number;

expenses:number;

}



export default function IncomeExpenseChart({

income,

expenses

}:Props){


const data=[

{

name:"Money",

income,

expenses,

}

];



return (

<div

className="
bg-white
border
rounded-xl
p-6
h-96
"

>


<h2

className="
text-xl
font-semibold
mb-4
"

>

Income vs Expenses

</h2>



<ResponsiveContainer

width="100%"

height="85%"

>


<BarChart

data={data}

>


<XAxis

dataKey="name"

/>


<YAxis />


<Tooltip />


<Legend />



<Bar

dataKey="income"

/>



<Bar

dataKey="expenses"

/>



</BarChart>


</ResponsiveContainer>


</div>

);

}