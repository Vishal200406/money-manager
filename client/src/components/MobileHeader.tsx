"use client";


import {
  useState
} from "react";


import Link from "next/link";


import {
  usePathname,
  useRouter
} from "next/navigation";


import {
  Menu,
  X
} from "lucide-react";


import {
  navigation
} from "@/config/navigation";


import {
  useAuth
} from "@/context/AuthContext";


import Avatar
from "@/components/ui/Avatar";





export default function MobileHeader(){


const [open,setOpen] = useState(false);


const pathname = usePathname();


const router = useRouter();



const {
  user,
  logout
} = useAuth();





const handleLogout = async()=>{


try{


await logout();


router.push("/login");


}

catch(error){


console.error(

"Logout failed",

error

);


}


};







return (

<>


<header

className="
md:hidden
fixed
top-0
left-0
right-0
z-50
bg-white
border-b
p-4
flex
items-center
justify-between
"

>


<button

onClick={()=>setOpen(true)}

className="
p-2
rounded-lg
hover:bg-gray-100
"

>

<Menu size={24}/>

</button>





<h1

className="
font-bold
text-lg
"

>

💰 Money Manager

</h1>





<div className="w-8"/>



</header>







{

open &&

(


<div

className="
md:hidden
fixed
inset-0
z-50
"

>


{/* Overlay */}

<div

onClick={()=>setOpen(false)}

className="
absolute
inset-0
bg-black/40
"

/>








{/* Menu */}

<div

className="
relative
w-72
h-full
bg-white
p-6
shadow-xl
"

>





<div

className="
flex
justify-between
items-center
mb-8
"

>


<h2

className="
font-bold
text-xl
"

>

Menu

</h2>



<button

onClick={()=>setOpen(false)}

>

<X size={24}/>

</button>


</div>








{/* User */}

<div

className="
flex
items-center
gap-3
border-b
pb-5
mb-5
"

>


<Avatar

name={

user?.name || "User"

}

/>



<div>


<p className="font-semibold">

{

user?.name || "User"

}

</p>


<p className="text-sm text-gray-500">

{

user?.currency || "USD"

}

Account

</p>


</div>


</div>









{/* Navigation */}

<nav

className="
space-y-2
"

>


{

navigation.map((item)=>{


const Icon=item.icon;


const active=

pathname === item.href;



return (


<Link

key={item.href}

href={item.href}

onClick={()=>setOpen(false)}

className={`

flex
items-center
gap-3
px-4
py-3
rounded-xl

${
active

?

"bg-blue-600 text-white"

:

"text-gray-600 hover:bg-gray-100"

}

`}

>


<Icon size={20}/>


<span>

{item.name}

</span>


</Link>


);


})


}


</nav>









{/* Logout */}

<div

className="
absolute
bottom-6
left-6
right-6
"

>


<button

onClick={handleLogout}

className="
w-full
rounded-xl
border
py-3
hover:bg-gray-100
transition
"

>

Logout

</button>


</div>







</div>


</div>


)

}



</>

);

}