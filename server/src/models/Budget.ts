import mongoose, {
  Schema,
  Document,
} from "mongoose";


export interface IBudget extends Document {

  userId: mongoose.Types.ObjectId;

  categoryId: mongoose.Types.ObjectId;

  amount: number;

  month: number;

  year: number;

  createdAt: Date;

  updatedAt: Date;

}



const BudgetSchema =
new Schema<IBudget>(
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


amount:{

type:Number,

required:true,

min:0,

},


month:{

type:Number,

required:true,

},


year:{

type:Number,

required:true,

},


},

{

timestamps:true,

}

);



BudgetSchema.index({

userId:1,

categoryId:1,

month:1,

year:1,

});



export default mongoose.model<IBudget>(
"Budget",
BudgetSchema
);