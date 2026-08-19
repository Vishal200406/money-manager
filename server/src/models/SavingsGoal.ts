import mongoose, {
  Schema,
  Document,
} from "mongoose";


export interface ISavingsGoal extends Document {

  userId:
  mongoose.Types.ObjectId;


  name:string;


  targetAmount:number;


  currentAmount:number;


  currency:
  "USD" |
  "CAD" |
  "GBP" |
  "INR";


  deadline:Date;


  createdAt:Date;


  updatedAt:Date;

}



const SavingsGoalSchema =
new Schema<ISavingsGoal>(

{

userId:{

type:Schema.Types.ObjectId,

ref:"User",

required:true,

},


name:{

type:String,

required:true,

trim:true,

},


targetAmount:{

type:Number,

required:true,

min:0,

},


currentAmount:{

type:Number,

default:0,

min:0,

},


currency:{

type:String,

enum:[

"USD",

"CAD",

"GBP",

"INR"

],

default:"USD",

},


deadline:{

type:Date,

required:true,

},


},

{

timestamps:true,

}

);



SavingsGoalSchema.index({

userId:1,

});



export default mongoose.model<ISavingsGoal>(

"SavingsGoal",

SavingsGoalSchema

);