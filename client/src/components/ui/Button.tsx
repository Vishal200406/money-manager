interface Props {

children:React.ReactNode;

onClick?:()=>void;

className?:string;

}



export default function Button({

children,

onClick,

className

}:Props){


return (

<button

onClick={onClick}

className={`

rounded-xl

px-5

py-3

bg-primary

text-white

font-medium

shadow-sm

hover:bg-blue-700

hover:shadow-md

active:scale-95

transition

${className || ""}

`}

>

{children}

</button>

);

}