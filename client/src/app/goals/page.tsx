"use client";


import {

useEffect,

useState

}

from "react";



import PageAnimation
from "@/components/PageAnimation";


import Card
from "@/components/ui/Card";


import Input
from "@/components/ui/Input";


import Button
from "@/components/ui/Button";


import GoalCard
from "@/components/goals/GoalCard";



import {

getGoals,

createGoal,

deleteGoal,

addMoney

}

from "@/lib/savingsGoalApi";



export default function GoalsPage(){



const [

goals,

setGoals

]=useState<any[]>([]);



const [

form,

setForm

]=useState({

name:"",

targetAmount:"",

deadline:""

});





const loadGoals=async()=>{


const data=

await getGoals();


setGoals(data);


};





useEffect(()=>{


loadGoals();


},[]);








const submit=async()=>{


await createGoal({

name:

form.name,


targetAmount:

Number(form.targetAmount),


deadline:

form.deadline


});



setForm({

name:"",

targetAmount:"",

deadline:""

});


loadGoals();


};







const remove=async(

id:string

)=>{


await deleteGoal(id);


loadGoals();


};






const contribute=async(

goal:any

)=>{


const amount=

prompt(

"Enter amount to add"

);



if(!amount)return;



await addMoney(

goal._id,

Number(amount)

);



loadGoals();


};







return (

<PageAnimation>


<div

className="
space-y-8
"

>



<div>


<h1

className="
text-3xl
font-bold
"

>

Savings Goals

</h1>



<p

className="
text-gray-500
mt-2
"

>

Track your progress toward important milestones.

</p>


</div>









<Card>


<h2

className="
text-xl
font-bold
mb-5
"

>

Create Goal

</h2>





<div

className="
grid
md:grid-cols-4
gap-4
"

>



<Input

placeholder="Goal name"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>





<Input

placeholder="Target amount"

type="number"

value={form.targetAmount}

onChange={(e)=>

setForm({

...form,

targetAmount:e.target.value

})

}

/>





<Input

type="date"

value={form.deadline}

onChange={(e)=>

setForm({

...form,

deadline:e.target.value

})

}

/>






<Button

onClick={submit}

>

Create Goal

</Button>



</div>


</Card>









<div

className="
grid
md:grid-cols-2
gap-6
"

>


{

goals.length > 0

?

goals.map(

(goal)=>(


<GoalCard

key={goal._id}

goal={goal}

onDelete={remove}

onAddMoney={contribute}

/>


)

)


:

(

<Card>


<div

className="
text-center
py-10
"

>


<div

className="
text-5xl
"

>

🎯

</div>



<h3

className="
text-xl
font-bold
mt-4
"

>

No savings goals yet

</h3>



<p

className="
text-gray-500
mt-2
"

>

Create your first financial goal.

</p>



</div>


</Card>

)

}


</div>





</div>


</PageAnimation>

);

}