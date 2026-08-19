interface Props {

status:
"safe"
|
"warning"
|
"exceeded";

category:string;

percentage:number;

}



export default function BudgetAlert({

status,

category,

percentage,

}:Props){



if(status==="safe"){

return null;

}



return (

<div

className={`

rounded-lg

p-4

border

${

status==="exceeded"

?

"bg-red-100 border-red-500"

:

"bg-yellow-100 border-yellow-500"

}

`}

>


<h3 className="font-bold">

{

status==="exceeded"

?

"🚨 Budget exceeded"

:

"⚠ Budget warning"

}

</h3>


<p>

{category}

has used

{" "}

{percentage.toFixed(0)}%

of its budget.

</p>


</div>

);


}