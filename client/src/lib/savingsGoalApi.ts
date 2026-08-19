import api from "./api";


export const getGoals =
async()=>{


const response =
await api.get(

"/goals"

);


return response.data;

};




export const createGoal =
async(

data:any

)=>{


const response =
await api.post(

"/goals",

data

);


return response.data;

};




export const updateGoal =
async(

id:string,

amount:number

)=>{


const response =
await api.patch(

`/goals/${id}`,

{

amount

}

);


return response.data;

};




export const deleteGoal =
async(

id:string

)=>{


const response =
await api.delete(

`/goals/${id}`

);


return response.data;

};