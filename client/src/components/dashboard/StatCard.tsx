interface Props {

title:string;

value:string;

icon:React.ReactNode;

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
"bg-purple-50 text-purple-600",

};



return (

<div

className="
bg-white
rounded-2xl
border
p-5
hover:shadow-md
transition
"

>


<div

className={`

w-10

h-10

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
text-sm
text-gray-500
"

>

{title}

</p>



<h2

className="
text-2xl
md:text-3xl
font-bold
mt-2
break-words
"

>

{value}

</h2>



</div>

);

}