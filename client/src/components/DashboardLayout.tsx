"use client";


import {
ReactNode
} from "react";


import Sidebar
from "@/components/Sidebar";



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
flex
"

>


<Sidebar />



<main

className="
flex-1
p-6
overflow-hidden
"

>

{children}

</main>



</div>

);

}