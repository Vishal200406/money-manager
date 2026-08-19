"use client";


import {

createContext,

useContext,

useEffect,

useState,

ReactNode

}

from "react";


import {

getProfile

}

from "@/lib/userApi";


import {

logoutUser

}

from "@/lib/authApi";




interface User {


  _id:string;

  name:string;

  email:string;

  currency:string;


}




interface AuthContextType {


  user:User|null;


  loading:boolean;


  refreshUser:()=>Promise<void>;


  logout:()=>Promise<void>;


}





const AuthContext =

createContext<AuthContextType>({


  user:null,


  loading:true,


  refreshUser:async()=>{},


  logout:async()=>{}


});







export function AuthProvider({


children


}:{


children:ReactNode


}){





const [user,setUser]

=

useState<User|null>(null);





const [loading,setLoading]

=

useState(true);









const refreshUser = async()=>{


try{


const data =

await getProfile();



setUser(data);



}

catch(error){



console.error(

"Failed loading user",

error

);



setUser(null);



}

finally{


setLoading(false);


}



};









const logout = async()=>{


try{


await logoutUser();



setUser(null);



}

catch(error){



console.error(

"Logout failed",

error

);



}



};









useEffect(()=>{


refreshUser();



},[]);









return (


<AuthContext.Provider


value={{


user,


loading,


refreshUser,


logout


}}


>


{children}


</AuthContext.Provider>


);



}








export function useAuth(){


return useContext(AuthContext);


}