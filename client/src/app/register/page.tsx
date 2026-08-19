"use client";


import {

useState,

useEffect

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


import Select

from "@/components/ui/Select";


import Button

from "@/components/ui/Button";


import PasswordInput

from "@/components/ui/PasswordInput";


import api

from "@/lib/api";


import {

useAuth

}

from "@/context/AuthContext";





export default function RegisterPage(){



const router = useRouter();



const {

user,

loading:userLoading,

refreshUser

}

=

useAuth();






const [

form,

setForm

]

=

useState({

name:"",

email:"",

password:"",

confirmPassword:"",

currency:"USD"

});






const [

error,

setError

]

=

useState("");





const [

loading,

setLoading

]

=

useState(false);









// Redirect logged-in users

useEffect(()=>{


if(!userLoading && user){


router.replace("/dashboard");


}



},[

user,

userLoading,

router

]);









const submit = async(

e:React.FormEvent

)=>{


e.preventDefault();



setError("");






if(

form.password !== form.confirmPassword

){


setError(

"Passwords do not match"

);


return;


}






if(

form.password.length < 8

){


setError(

"Password must be at least 8 characters"

);


return;


}









try{


setLoading(true);






await api.post(

"/auth/register",

{

name:form.name,

email:form.email,

password:form.password,

currency:form.currency

}

);







// Load newly created user

await refreshUser();






router.push(

"/dashboard"

);







}

catch(error:any){



setError(

error.response?.data?.message ||

"Registration failed"

);



}

finally{


setLoading(false);


}



};









if(userLoading){


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


<AuthCard

title="Create Account"

>




<form

onSubmit={submit}

className="
space-y-5
"

>





<Input

placeholder="Full name"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>







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









<PasswordInput

value={form.password}

placeholder="Password"

onChange={(e)=>

setForm({

...form,

password:e.target.value

})

}

/>








<PasswordInput

value={form.confirmPassword}

placeholder="Confirm Password"

onChange={(e)=>

setForm({

...form,

confirmPassword:e.target.value

})

}

/>









<Select

value={form.currency}

onChange={(e)=>

setForm({

...form,

currency:e.target.value

})

}

>



<option value="USD">

USD - US Dollar

</option>




<option value="CAD">

CAD - Canadian Dollar

</option>





<option value="GBP">

GBP - British Pound

</option>





<option value="INR">

INR - Indian Rupee

</option>



</Select>








{

error &&

<p

className="
text-red-600
text-sm
"

>

{error}

</p>

}








<Button>



{

loading

?

"Creating Account..."

:

"Create Account"

}



</Button>





</form>





</AuthCard>



);


}