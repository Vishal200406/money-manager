import {
SelectHTMLAttributes
}
from "react";


interface Props
extends SelectHTMLAttributes<HTMLSelectElement>{}



export default function Select({

children,

className,

...props

}:Props){


return (

<select

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

focus:ring-4

focus:ring-blue-100

focus:border-primary

transition

${className || ""}

`}

>

{children}

</select>

);

}