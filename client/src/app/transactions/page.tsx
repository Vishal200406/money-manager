"use client";


import {
useState
} from "react";


import api from "@/lib/api";


export default function TransactionsPage(){


const [message,setMessage]=useState("");



const addTransaction = async()=>{


try{


await api.post(

"/transactions",

{

type:"expense",

amount:50,

currency:"USD",

description:
"Test expense",

date:
new Date(),

categoryId:
"000000000000000000000000"

}

);



setMessage(

"Transaction added"

);



}catch(error){


setMessage(

"Failed"

);


}


};



return (

<div>

<h1 className="text-3xl font-bold">

Transactions

</h1>


<button

onClick={addTransaction}

className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded
"

>

Add Test Transaction

</button>


<p>

{message}

</p>


</div>

);


}