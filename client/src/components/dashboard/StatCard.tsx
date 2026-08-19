import {
ReactNode
} from "react";


interface Props {

title:string;

value:string;

icon:ReactNode;

type?:
"blue"
|
"green"
|
"red"
|
"purple";

}



export default function StatCard({

title,

value,

icon,

type="blue"

}:Props){



const colors={


blue:
"bg-blue-50 text-blue-600",


green:
"bg-green-50 text-green-600",


red:
"bg-red-50 text-red-600",


purple:
"bg-purple-50 text-purple-600"


};



return (

<div

className="
bg-white
rounded-2xl
border
shadow-card
p-6
hover:shadow-lg
transition
"

>


<div

className={`
w-12
h-12
rounded-xl
flex
items-center
justify-center
mb-4
${colors[type]}
`}

>

{icon}

</div>



<p

className="
text-gray-500
text-sm
"

>

{title}

</p>



<h2

className="
text-3xl
font-bold
mt-2
"

>

{value}

</h2>



</div>

);

}