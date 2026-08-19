import {
cn
}
from "@/lib/utils";


interface Props {

children:React.ReactNode;

className?:string;

onClick?:()=>void;

}



export default function Button({

children,

className,

onClick

}:Props){


return (

<button

onClick={onClick}

className={cn(

`
px-4
py-2
rounded-lg
bg-blue-600
text-white
font-medium
hover:bg-blue-700
transition
`,

className

)}

>

{children}

</button>

);

}