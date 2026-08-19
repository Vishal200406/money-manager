interface Props {

income:number;

expenses:number;

}



export default function SavingsCard({

income,

expenses

}:Props){


const savings =
income - expenses;



const rate =
income === 0

?

0

:

(savings / income) * 100;



return (

<div

className="
bg-white
border
rounded-xl
p-6
"

>


<h2

className="
text-gray-500
"

>

Savings Rate

</h2>



<p

className="
text-4xl
font-bold
mt-3
"

>

{rate.toFixed(1)}%

</p>



<p

className="
mt-2
text-gray-600
"

>

Saved:

{" "}

${savings}

</p>



</div>

);

}