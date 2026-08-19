"use client";

import {
useState
} from "react";

import api from "@/lib/api";

import {
useRouter
} from "next/navigation";


export default function RegisterPage(){

const router = useRouter();


const [form,setForm]=useState({

name:"",
email:"",
password:"",
currency:"USD",

});


const [message,setMessage]=useState("");



const handleSubmit = async(
e:React.FormEvent
)=>{


e.preventDefault();


try{


await api.post(
"/auth/register",
form
);


setMessage(
"Account created successfully"
);


router.push(
"/dashboard"
);



}catch(error){

setMessage(
"Registration failed"
);

}


};



return (

<div>


<h1>
Create Account
</h1>


<form
onSubmit={handleSubmit}
>


<input

placeholder="Name"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>



<input

placeholder="Email"

type="email"

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

/>




<input

placeholder="Password"

type="password"

value={form.password}

onChange={(e)=>

setForm({

...form,

password:e.target.value

})

}

/>



<select

value={form.currency}

onChange={(e)=>

setForm({

...form,

currency:e.target.value

})

}

>


<option value="USD">
USD
</option>


<option value="CAD">
CAD
</option>


<option value="GBP">
GBP
</option>


<option value="INR">
INR
</option>


</select>




<button type="submit">

Register

</button>


</form>


<p>

{message}

</p>


</div>

);

}