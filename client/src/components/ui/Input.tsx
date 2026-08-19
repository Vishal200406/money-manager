import {
InputHTMLAttributes
} from "react";


interface Props
extends InputHTMLAttributes<HTMLInputElement>{}



export default function Input({

className,

...props

}:Props){


return (

<input

{...props}

className={`

w-full

rounded-xl

border

border-gray-200

bg-white

px-4

py-3

text-sm

placeholder:text-gray-400

focus:ring-4

focus:ring-blue-100

focus:border-primary

transition

${className || ""}

`}

/>

);

}