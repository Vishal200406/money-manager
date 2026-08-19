"use client";


import Link from "next/link";


import {
usePathname
} from "next/navigation";


import {

Home,

CreditCard,

BarChart3,

Settings

}

from "lucide-react";



const items=[

{

name:"Home",

href:"/dashboard",

icon:Home

},


{

name:"Money",

href:"/transactions",

icon:CreditCard

},


{

name:"Reports",

href:"/reports",

icon:BarChart3

},


{

name:"Settings",

href:"/settings",

icon:Settings

}

];



export default function MobileNav(){


const pathname =
usePathname();



return (

<div

className="
fixed
bottom-0
left-0
right-0
bg-white
border-t
md:hidden
z-50
"

>


<div

className="
grid
grid-cols-4
"

>


{

items.map(

(item)=>{


const Icon =
item.icon;


const active =
pathname===item.href;



return (

<Link

key={item.href}

href={item.href}

className={`

flex

flex-col

items-center

justify-center

py-3

text-xs

${

active

?

"text-primary"

:

"text-gray-500"

}

`}

>


<Icon

size={22}

/>


<span>

{item.name}

</span>


</Link>

);


}

)

}


</div>


</div>

);

}