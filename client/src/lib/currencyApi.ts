import api from "./api";


export const getCurrencies =
async(

base:string

)=>{


const response =
await api.get(

"/currency",

{

params:{
base
}

}

);



return response.data;

};