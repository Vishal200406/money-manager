"use client";


import Link from "next/link";


import {

ReactNode

}

from "react";



interface Props{

children:ReactNode;

}



export default function DashboardLayout({

children

}:Props){



const links=[


{
name:"Dashboard",
href:"/dashboard"
},


{
name:"Transactions",
href:"/transactions"
},


{
name:"Budgets",
href:"/budgets"
},


{
name:"Reports",
href:"/reports"
},


{
name:"Goals",
href:"/goals"
},


{
name:"Recurring",
href:"/recurring"
},


{
name:"Notifications",
href:"/notifications"
},


{
name:"Settings",
href:"/settings"
}



];



return (

<div className="min-h-screen bg-gray-100">


<div className="flex">


<aside

className="
hidden
md:block
w-64
bg-white
border-r
min-h-screen
p-5
"

>


<h1

className="
text-2xl
font-bold
mb-8
"

>

Money Manager

</h1>



<nav

className="
space-y-3
"

>


{

links.map(

(link)=>(


<Link

key={link.href}

href={link.href}

className="
block
p-3
rounded-lg
hover:bg-gray-100
transition
"

>

{link.name}

</Link>


)

)

}


</nav>


</aside>




<main

className="
flex-1
p-6
"

>

{children}

</main>



</div>


</div>

);

}