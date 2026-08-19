"use client";


import Link from "next/link";

import {
usePathname
} from "next/navigation";


import {
navigation
} from "@/config/navigation";


import Avatar
from "@/components/ui/Avatar";



export default function Sidebar(){


const pathname =
usePathname();



return (

<aside

className="
hidden
md:flex
flex-col
w-72
min-h-screen
bg-white
border-r
p-6
"

>


{/* Logo */}

<div

className="
flex
items-center
gap-3
mb-10
"

>


<div

className="
w-12
h-12
rounded-xl
bg-primary
text-white
flex
items-center
justify-center
text-2xl
"

>

💰

</div>



<div>


<h1

className="
font-bold
text-xl
"

>

Money Manager

</h1>


<p

className="
text-xs
text-gray-500
"

>

Finance Dashboard

</p>


</div>


</div>





{/* Navigation */}

<nav

className="
space-y-2
flex-1
"

>


{

navigation.map(

(item)=>{


const Icon =
item.icon;



const active =
pathname === item.href;



return (

<Link

key={item.href}

href={item.href}

className={`

flex

items-center

gap-3

px-4

py-3

rounded-xl

transition

${

active

?

"bg-primary text-white shadow-md"

:

"text-gray-600 hover:bg-gray-100"

}

`}

>


<Icon

size={20}

/>


<span>

{item.name}

</span>


</Link>

);


}

)

}


</nav>






{/* User */}

<div

className="
border-t
pt-5
mt-5
"

>


<div

className="
flex
items-center
gap-3
mb-4
"

>


<Avatar

name="John Smith"

/>


<div>


<p

className="
font-semibold
"

>

John Smith

</p>


<p

className="
text-sm
text-gray-500
"

>

USD Account

</p>


</div>


</div>



<button

className="
w-full
rounded-xl
border
py-2
text-sm
hover:bg-gray-100
"

>

Logout

</button>



</div>



</aside>

);

}