import mongoose, {
  Schema,
  Document,
} from "mongoose";


export interface INotification extends Document {

  userId:
  mongoose.Types.ObjectId;


  title:string;


  message:string;


  type:
  | "budget"
  | "payment"
  | "goal"
  | "system";


  read:boolean;


  createdAt:Date;


  updatedAt:Date;

}



const NotificationSchema =
new Schema<INotification>(

{

userId:{

type:Schema.Types.ObjectId,

ref:"User",

required:true,

},


title:{

type:String,

required:true,

},


message:{

type:String,

required:true,

},


type:{

type:String,

enum:[

"budget",

"payment",

"goal",

"system"

],

default:"system",

},


read:{

type:Boolean,

default:false,

},


},

{

timestamps:true,

}

);



NotificationSchema.index({

userId:1,

read:1,

createdAt:-1,

});



export default mongoose.model<INotification>(

"Notification",

NotificationSchema

);