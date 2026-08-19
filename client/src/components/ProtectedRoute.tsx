"use client";


import {

ReactNode,

useEffect

}

from "react";


import {

useRouter

}

from "next/navigation";


import {

useAuth

}

from "@/context/AuthContext";





interface ProtectedRouteProps {


children:ReactNode;


}





export default function ProtectedRoute({

children

}:ProtectedRouteProps){



const router = useRouter();



const {

user,

loading

}

=

useAuth();





useEffect(()=>{


if(!loading && !user){


router.replace("/login");


}



},[

loading,

user,

router

]);







if(

loading ||

!user

){


return (

<div

className="
min-h-screen
flex
items-center
justify-center
"

>

<p className="text-gray-500">

Loading...

</p>


</div>

);


}






return (

<>

{children}

</>


);


}