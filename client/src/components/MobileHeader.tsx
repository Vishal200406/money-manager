"use client";


import {
Menu
} from "lucide-react";



export default function MobileHeader(){


return (

<header

className="
md:hidden
bg-white
border-b
p-4
flex
items-center
justify-between
"

>


<button

className="
p-2
rounded-lg
hover:bg-gray-100
"

>

<Menu size={24}/>

</button>



<h1

className="
font-bold
text-lg
"

>

💰 Money Manager

</h1>



<div

className="
w-8
"

>


</div>



</header>

);

}