import Link from "next/link";


interface Props {

title:string;

href:string;

icon:string;

}



export default function QuickAction({

title,

href,

icon

}:Props){


return (

<Link

href={href}

className="
bg-white
border
rounded-xl
p-5
hover:shadow-md
transition
flex
items-center
gap-4
"

>


<div

className="
text-3xl
"

>

{icon}

</div>



<div>


<p className="
font-semibold
">

{title}

</p>


</div>


</Link>

);

}