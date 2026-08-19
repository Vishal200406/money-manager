interface Props {

title:string;

description?:string;

}



export default function SectionHeader({

title,

description

}:Props){


return (

<div className="mb-6">


<h1

className="
text-3xl
font-bold
tracking-tight
"

>

{title}

</h1>


{

description && (

<p

className="
text-gray-500
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