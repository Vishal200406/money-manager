"use client";


import {
useState
}
from "react";


import {
useRouter
}
from "next/navigation";


import AuthCard
from "@/components/AuthCard";


import Input
from "@/components/ui/Input";


import Button
from "@/components/ui/Button";


import api
from "@/lib/api";



export default function LoginPage(){


const router =
useRouter();



const [form,setForm]=useState({

email:"",

password:""

});



const [loading,setLoading]=useState(false);



const [error,setError]=useState("");




const submit=async(

e:React.FormEvent

)=>{


e.preventDefault();



try{


setLoading(true);

setError("");



await api.post(

"/auth/login",

form

);



router.push(

"/dashboard"

);



}

catch(err:any){


setError(

err.response?.data?.message ||

"Login failed"

);


}

finally{

setLoading(false);

}


};





return (

<AuthCard title="Login">


<form

onSubmit={submit}

className="
space-y-5
"

>


<Input

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




<Input

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



{

error &&

<p className="
text-red-600
text-sm
">

{error}

</p>

}



<Button>

{

loading

?

"Logging in..."

:

"Login"

}

</Button>



</form>


</AuthCard>

);

}