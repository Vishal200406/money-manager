interface Props {

title:string;

value:string;

description?:string;

icon:string;

}



export default function ReportCard({

title,

value,

description,

icon

}:Props){



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

className="
text-3xl
mb-4
"

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



{

description &&

(

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