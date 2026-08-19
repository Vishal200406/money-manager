import mongoose from "mongoose";
import { env } from "./env";


interface MongooseCache {

  conn: typeof mongoose | null;

  promise:
    Promise<typeof mongoose> | null;

}



declare global {

  var mongooseCache: MongooseCache | undefined;

}



let cached =
  global.mongooseCache;



if (!cached) {

  cached = {

    conn: null,

    promise: null,

  };


  global.mongooseCache = cached;

}




export const connectDatabase = async () => {


  if (cached!.conn) {

    return cached!.conn;

  }



  if (!cached!.promise) {


    cached!.promise =
      mongoose.connect(

        env.MONGODB_URI

      );


  }



  cached!.conn =
    await cached!.promise;



  console.log(
    "MongoDB connected successfully"
  );


  return cached!.conn;


};