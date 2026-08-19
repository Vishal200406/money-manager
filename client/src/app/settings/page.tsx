"use client";


import {

useEffect,

useState

}

from "react";


import {

getProfile,

updateProfile

}

from "@/lib/userApi";



export default function SettingsPage(){


const [

profile,

setProfile

]=useState<any>(null);



const [

form,

setForm

]=useState({

name:"",

currency:"USD"

});




useEffect(()=>{


getProfile()

.then(

(data)=>{


setProfile(data);


setForm({

name:data.name,

currency:data.currency

});


}

);



},[]);




const save =
async()=>{


const updated =
await updateProfile(

form

);



setProfile(updated);



};




if(!profile){

return (

<p>

Loading...

</p>

);

}



return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Profile Settings

</h1>



<div className="
bg-white
border
rounded-xl
p-6
space-y-4
">


<input

className="
border
rounded
p-2
"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}


/>



<select

className="
border
rounded
p-2
"

value={form.currency}

onChange={(e)=>

setForm({

...form,

currency:e.target.value

})

}

>

<option>
USD
</option>

<option>
CAD
</option>

<option>
GBP
</option>

<option>
INR
</option>


</select>



<button

onClick={save}

className="
bg-blue-600
text-white
rounded
p-2
"

>

Save Changes

</button>


</div>



</div>

);

}