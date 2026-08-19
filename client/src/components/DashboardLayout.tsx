"use client";


import {
ReactNode
} from "react";


import Sidebar
from "@/components/Sidebar";


import MobileNav
from "@/components/MobileNav";


import MobileHeader
from "@/components/MobileHeader";



interface Props {

children:ReactNode;

}



export default function DashboardLayout({

children

}:Props){



return (

<div

className="
min-h-screen
bg-gray-50
"

>



<MobileHeader />



<div

className="
flex
"

>


<Sidebar />



<main

className="
flex-1
p-4
md:p-6
pb-24
md:pb-6
"

>

{children}

</main>



</div>




<MobileNav />



</div>

);

}