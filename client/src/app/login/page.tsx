"use client";


import {
useState
} from "react";


import api from "@/lib/api";


import {
useRouter
} from "next/navigation";



export default function LoginPage(){


const router =
useRouter();


const [form,setForm]=useState({

email:"",
password:"",

});


const [message,setMessage]=useState("");



const handleSubmit = async(
e:React.FormEvent
)=>{


e.preventDefault();


try{


await api.post(
"/auth/login",
form
);


router.push(
"/dashboard"
);



}catch(error){


setMessage(
"Invalid login details"
);


}



};



return (

<div>


<h1>
Login
</h1>



<form
onSubmit={handleSubmit}
>


<input

type="email"

placeholder="Email"

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

/>



<input

type="password"

placeholder="Password"

value={form.password}

onChange={(e)=>

setForm({

...form,

password:e.target.value

})

}

/>



<button>

Login

</button>


</form>


<p>
{message}
</p>


</div>

);

}