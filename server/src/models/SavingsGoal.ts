import mongoose, {Schema} from "mongoose";


const SavingsGoalSchema = new Schema(

{

userId:{

type:mongoose.Schema.Types.ObjectId,

ref:"User",

required:true

},


name:{

type:String,

required:true

},


targetAmount:{

type:Number,

required:true

},


savedAmount:{

type:Number,

default:0

},


deadline:{

type:Date

},


createdAt:{

type:Date,

default:Date.now

}


},

{

timestamps:true

}

);



export default mongoose.model(

"SavingsGoal",

SavingsGoalSchema

);