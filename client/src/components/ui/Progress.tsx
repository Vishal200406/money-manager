interface Props {

value:number;

}



export default function Progress({

value

}:Props){



return (

<div

className="
w-full
bg-gray-200
rounded-full
h-3
overflow-hidden
"

>


<div

className="
bg-primary
h-full
rounded-full
transition-all
duration-500
"

style={{

width:`${Math.min(value,100)}%`

}}

/>


</div>

);

}