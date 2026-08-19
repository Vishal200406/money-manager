"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Receipt,
  Wallet,
  ChartBar,
  Target,
  Settings,
} from "lucide-react";


const menuItems = [

{
name:"Dashboard",
href:"/dashboard",
icon:LayoutDashboard,
},


{
name:"Transactions",
href:"/transactions",
icon:Receipt,
},


{
name:"Budgets",
href:"/budgets",
icon:Wallet,
},


{
name:"Reports",
href:"/reports",
icon:ChartBar,
},


{
name:"Goals",
href:"/goals",
icon:Target,
},


{
name:"Settings",
href:"/settings",
icon:Settings,
},


];


export default function Sidebar(){


return (

<aside
className="
w-64
min-h-screen
border-r
bg-white
p-6
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
menuItems.map(
(item)=>

<Link

key={item.name}

href={item.href}

className="
flex
items-center
gap-3
rounded-lg
px-4
py-3
hover:bg-gray-100
transition
"

>


<item.icon size={20}/>


<span>

{item.name}

</span>


</Link>


)

}



</nav>



</aside>

);

}