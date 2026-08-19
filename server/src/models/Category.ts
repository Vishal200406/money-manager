import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface ICategory extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  icon?: string;
  type: "income" | "expense";
  createdAt: Date;
  updatedAt: Date;
}


const CategorySchema =
  new Schema<ICategory>(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      icon: {
        type: String,
        default: "",
      },

      type: {
        type: String,
        enum: [
          "income",
          "expense",
        ],
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );


export default mongoose.model<ICategory>(
  "Category",
  CategorySchema
);