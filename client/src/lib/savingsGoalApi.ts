import api from "./api";



export const getGoals = async()=>{


const response = await api.get(

"/savings-goals"

);


return response.data;


};





export const createGoal = async(

data:any

)=>{


const response = await api.post(

"/savings-goals",

data

);


return response.data;


};





export const deleteGoal = async(

id:string

)=>{


const response = await api.delete(

`/savings-goals/${id}`

);


return response.data;


};





export const addMoney = async(

id:string,

amount:number

)=>{


const response = await api.patch(

`/savings-goals/${id}/add-money`,

{

amount

}

);


return response.data;


};