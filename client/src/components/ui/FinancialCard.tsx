interface Props {

title:string;

amount:string;

description?:string;

}



export default function FinancialCard({

title,

amount,

description

}:Props){


return (

<div

className="
bg-white
rounded-2xl
border
shadow-card
p-6
hover:-translate-y-1
transition
"

>


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
mt-3
"

>

{amount}

</h2>



{

description && (

<p

className="
text-sm
text-gray-400
mt-2
"

>

{description}

</p>

)

}



</div>

);

}