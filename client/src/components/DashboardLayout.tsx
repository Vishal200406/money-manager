"use client";


import {

ReactNode

}

from "react";


import Sidebar

from "@/components/Sidebar";


import MobileNav

from "@/components/MobileNav";


import MobileHeader

from "@/components/MobileHeader";


import ProtectedRoute

from "@/components/ProtectedRoute";





interface Props {


children:ReactNode;


}








export default function DashboardLayout({

children

}:Props){





return (


<ProtectedRoute>



<div

className="
min-h-screen
bg-gray-50
"

>





{/* Mobile top navigation */}

<MobileHeader />








<div

className="
flex
"

>





{/* Desktop sidebar */}

<Sidebar />








<main

className="
flex-1
p-4
pt-20
md:p-6
md:pt-6
pb-24
md:pb-6
"

>


{children}


</main>






</div>







{/* Mobile bottom navigation */}

<MobileNav />





</div>



</ProtectedRoute>



);


}