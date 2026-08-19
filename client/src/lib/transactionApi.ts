import api from "./api";


export const createTransaction = async (
data:any
)=>{

const response =
await api.post(
"/transactions",
data
);


return response.data;

};



export const getTransactions = async()=>{


const response =
await api.get(
"/transactions"
);


return response.data;

};



export const deleteTransaction = async(
id:string
)=>{


const response =
await api.delete(
`/transactions/${id}`
);


return response.data;

};