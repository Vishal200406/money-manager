"use client";


import {

PieChart,

Pie,

Cell,

Tooltip,

Legend,

ResponsiveContainer

} from "recharts";



interface Props {

data:any[];

}



export default function ExpensePieChart({

data

}:Props){



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

Expenses By Category

</h2>



<ResponsiveContainer

width="100%"

height="85%"

>


<PieChart>


<Pie

data={data}

dataKey="amount"

nameKey="name"

cx="50%"

cy="50%"

outerRadius={100}

label

>


{

data.map(

(entry,index)=>(

<Cell

key={`cell-${index}`}

/>

)

)

}


</Pie>



<Tooltip />


<Legend />


</PieChart>


</ResponsiveContainer>


</div>

);

}