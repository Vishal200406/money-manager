"use client";


import {
useState
} from "react";


import {
Eye,
EyeOff
} from "lucide-react";


interface Props {

value:string;

onChange:(

e:React.ChangeEvent<HTMLInputElement>

)=>void;

placeholder?:string;

}



export default function PasswordInput({

value,

onChange,

placeholder="Password"

}:Props){


const [

showPassword,

setShowPassword

]=useState(false);



return (

<div className="relative">


<input

type={

showPassword

?

"text"

:

"password"

}

value={value}

onChange={onChange}

placeholder={placeholder}

className="

w-full

rounded-xl

border

border-gray-200

bg-white

px-4

py-3

pr-12

text-sm

focus:ring-4

focus:ring-blue-100

focus:border-blue-600

transition

"

/>



<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="

absolute

right-3

top-1/2

-translate-y-1/2

text-gray-500

hover:text-gray-700

"

>

{

showPassword

?

<EyeOff size={20}/>

:

<Eye size={20}/>

}


</button>


</div>

);

}