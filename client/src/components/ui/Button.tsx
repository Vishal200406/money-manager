"use client";


interface Props {

children:React.ReactNode;

onClick?:()=>void;

className?:string;

type?:
"primary"
|
"danger"
|
"secondary";

}



export default function Button({

children,

onClick,

className,

type="primary"

}:Props){



const styles={


primary:

"bg-blue-600 text-white hover:bg-blue-700",


danger:

"bg-red-600 text-white hover:bg-red-700",


secondary:

"bg-gray-100 text-gray-800 hover:bg-gray-200"


};




return (

<button

onClick={onClick}

className={`

w-full

rounded-xl

px-5

py-3

font-semibold

shadow-sm

transition

active:scale-95

${styles[type]}

${className || ""}

`}

>

{children}

</button>

);

}