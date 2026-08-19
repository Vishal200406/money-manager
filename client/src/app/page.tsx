"use client";


import {
  useEffect
} from "react";


import {
  useRouter
} from "next/navigation";


import Link from "next/link";


import {
  useAuth
} from "@/context/AuthContext";


import {
  ArrowRight,
  BarChart3,
  Wallet,
  Target,
  ShieldCheck
} from "lucide-react";




export default function Home(){


const router = useRouter();


const {
  user,
  loading
} = useAuth();





useEffect(()=>{


  if(!loading && user){

    router.replace("/dashboard");

  }


},[user,loading,router]);







if(loading){

return (

<div

className="
min-h-screen
flex
items-center
justify-center
"

>

Loading...

</div>

);

}






if(user){

return null;

}






return (

<main

className="
min-h-screen
bg-gradient-to-br
from-blue-50
via-white
to-blue-100
"

>


<section

className="
max-w-7xl
mx-auto
px-6
py-20
"

>


<div

className="
grid
md:grid-cols-2
gap-12
items-center
"

>


<div>


<div

className="
flex
items-center
gap-3
mb-8
"

>

<div

className="
w-14
h-14
rounded-2xl
bg-blue-600
text-white
flex
items-center
justify-center
text-3xl
"

>

💰

</div>


<h1 className="text-3xl font-bold">

Money Manager

</h1>


</div>





<h2

className="
text-5xl
font-bold
leading-tight
"

>

Manage your money.
Build better habits.

</h2>




<p

className="
mt-6
text-lg
text-gray-600
"

>

Track income, expenses, budgets,
savings goals and reports from one
simple dashboard.

</p>






<div

className="
flex
gap-4
mt-8
"

>


<Link

href="/register"

className="
flex
items-center
gap-2
bg-blue-600
text-white
px-6
py-3
rounded-xl
"

>

Create Account

<ArrowRight size={18}/>

</Link>



<Link

href="/login"

className="
px-6
py-3
border
rounded-xl
"

>

Login

</Link>


</div>


</div>







<div

className="
bg-white
rounded-3xl
shadow-xl
p-8
"

>


<div className="grid gap-5">


<div className="p-5 rounded-2xl bg-blue-50">

<Wallet/>

<h3 className="font-bold mt-3">

Track Spending

</h3>

</div>




<div className="p-5 rounded-2xl bg-green-50">

<BarChart3/>

<h3 className="font-bold mt-3">

Analytics

</h3>

</div>




<div className="p-5 rounded-2xl bg-purple-50">

<Target/>

<h3 className="font-bold mt-3">

Savings Goals

</h3>

</div>



</div>


</div>



</div>


</section>





<section

className="
max-w-7xl
mx-auto
px-6
pb-20
"

>


<div

className="
grid
md:grid-cols-3
gap-6
"

>


<div className="bg-white p-6 rounded-2xl border">

<ShieldCheck/>

<h3 className="font-bold mt-3">

Secure

</h3>

</div>



<div className="bg-white p-6 rounded-2xl border">

<Wallet/>

<h3 className="font-bold mt-3">

Budgets

</h3>

</div>



<div className="bg-white p-6 rounded-2xl border">

<BarChart3/>

<h3 className="font-bold mt-3">

Reports

</h3>

</div>


</div>


</section>



</main>

);


}