import app from "./app";

import {
  connectDatabase
} from "./config/database";

import {
  env
} from "./config/env";


const startServer = async () => {

  await connectDatabase();


  if (process.env.NODE_ENV !== "production") {


    app.listen(

      env.PORT,

      () => {

        console.log(
          `Server running on http://localhost:${env.PORT}`
        );

      }

    );


  }

};


startServer();


export default app;