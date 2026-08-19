interface Props {

name:string;

}



export default function Avatar({

name

}:Props){


const initials =

name

.split(" ")

.map(

word=>word[0]

)

.join("")

.substring(0,2)

.toUpperCase();



return (

<div

className="
w-10
h-10
rounded-full
bg-primary
text-white
flex
items-center
justify-center
font-bold
"

>

{initials}

</div>

);

}