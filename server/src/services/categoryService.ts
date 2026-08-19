import Category from "../models/Category";


export const createDefaultCategories =
async(

userId:string

)=>{


const categories=[


{
name:"Rent",
icon:"🏠",
type:"expense",
},


{
name:"Food",
icon:"🍔",
type:"expense",
},


{
name:"Insurance",
icon:"🛡️",
type:"expense",
},


{
name:"Bills",
icon:"💡",
type:"expense",
},


{
name:"Transport",
icon:"🚗",
type:"expense",
},


{
name:"Personal",
icon:"🧍",
type:"expense",
},


{
name:"Entertainment",
icon:"🎬",
type:"expense",
},


{
name:"Salary",
icon:"💰",
type:"income",
},


{
name:"Business",
icon:"🏢",
type:"income",
},


{
name:"Investment",
icon:"📈",
type:"income",
},


];



await Category.insertMany(

categories.map(category=>({

...category,

userId,

isDefault:true,

}))

);


};