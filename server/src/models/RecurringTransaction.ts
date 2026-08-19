import mongoose, {
  Schema,
  Document,
} from "mongoose";


export interface IRecurringTransaction
extends Document {


userId:
mongoose.Types.ObjectId;


categoryId:
mongoose.Types.ObjectId;


type:
"income" | "expense";


amount:number;


currency:
"USD" |
"CAD" |
"GBP" |
"INR";


description:string;


frequency:
"daily" |
"weekly" |
"monthly" |
"yearly";


nextDate:Date;


active:boolean;


createdAt:Date;


updatedAt:Date;


}




const RecurringTransactionSchema =
new Schema<IRecurringTransaction>(

{

userId:{

type:Schema.Types.ObjectId,

ref:"User",

required:true,

},



categoryId:{

type:Schema.Types.ObjectId,

ref:"Category",

required:true,

},



type:{

type:String,

enum:[

"income",

"expense"

],

required:true,

},



amount:{

type:Number,

required:true,

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



description:{

type:String,

default:"",

},



frequency:{

type:String,

enum:[

"daily",

"weekly",

"monthly",

"yearly"

],

required:true,

},



nextDate:{

type:Date,

required:true,

},



active:{

type:Boolean,

default:true,

},



},

{

timestamps:true,

}

);



RecurringTransactionSchema.index({

userId:1,

nextDate:1,

});



export default mongoose.model<IRecurringTransaction>(

"RecurringTransaction",

RecurringTransactionSchema

);