import axios from "axios";


const BASE_URL =
"https://api.exchangerate-api.com/v4/latest";



export const getExchangeRates =
async(
baseCurrency:string
)=>{


try{


const response =
await axios.get(

`${BASE_URL}/${baseCurrency}`

);



return response.data.rates;



}catch(error){


console.error(
"Currency API Error",
error
);


throw new Error(
"Unable to fetch exchange rates"
);


}


};