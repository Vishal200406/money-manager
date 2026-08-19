"use client";


import {
ReactNode
} from "react";


interface Props {

title:string;

children:ReactNode;

}



export default function AuthCard({

title,

children

}:Props){


return (

<div

className="
min-h-screen
bg-gray-50
flex
items-center
justify-center
p-6
"

>


<div

className="
w-full
max-w-md
"

>


<div

className="
text-center
mb-8
"

>


<div

className="
mx-auto
w-16
h-16
rounded-2xl
bg-primary
text-white
flex
items-center
justify-center
text-3xl
"

>

💰

</div>



<h1

className="
text-3xl
font-bold
mt-4
"

>

Money Manager

</h1>


<p

className="
text-gray-500
mt-2
"

>

Manage your money smarter

</p>


</div>





<div

className="
bg-white
rounded-2xl
shadow-card
border
p-8
"

>


<h2

className="
text-2xl
font-bold
mb-6
"

>

{title}

</h2>


{children}


</div>



</div>



</div>

);

}