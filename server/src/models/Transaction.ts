import mongoose, {
  Schema,
  Document,
} from "mongoose";


export interface ITransaction
extends Document {

  userId: mongoose.Types.ObjectId;

  type:
  | "income"
  | "expense";

  amount: number;

  currency:
  | "USD"
  | "CAD"
  | "GBP"
  | "INR";

  categoryId:
  mongoose.Types.ObjectId;

  description?: string;

  date: Date;

  createdAt: Date;

  updatedAt: Date;
}


const TransactionSchema =
new Schema<ITransaction>(
{
  userId:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },


  type:{
    type:String,
    enum:[
      "income",
      "expense",
    ],
    required:true,
  },


  amount:{
    type:Number,
    required:true,
    min:0,
  },


  currency:{
    type:String,
    enum:[
      "USD",
      "CAD",
      "GBP",
      "INR",
    ],
    default:"USD",
  },


  categoryId:{
    type:Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },


  description:{
    type:String,
    trim:true,
  },


  date:{
    type:Date,
    required:true,
  },


},
{
 timestamps:true,
}
);

TransactionSchema.index({
  userId: 1,
  date: -1,
});

TransactionSchema.index({
  userId: 1,
  categoryId: 1,
});


export default mongoose.model<ITransaction>(
 "Transaction",
 TransactionSchema
);