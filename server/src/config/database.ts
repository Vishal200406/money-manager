import mongoose from "mongoose";
import { env } from "./env";


export const connectDatabase = async (): Promise<void> => {

  try {


    console.log(
      "Mongo URI loaded:",
      Boolean(env.MONGODB_URI)
    );


    await mongoose.connect(
      env.MONGODB_URI
    );


    console.log(
      "MongoDB connected successfully"
    );


  } catch(error) {


    console.error(
      "MongoDB connection failed"
    );


    console.error(error);


  }

};