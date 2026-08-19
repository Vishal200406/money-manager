import app from "./app";
import { connectDatabase } from "./config/database";
import { env } from "./config/env";


connectDatabase()
.then(()=>{

console.log(
"Database ready"
);


})
.catch((error)=>{

console.error(
"Database connection failed",
error
);

});



if(process.env.NODE_ENV !== "production"){

app.listen(
  env.PORT,
  ()=>{

    console.log(
      `Server running on http://localhost:${env.PORT}`
    );

  }
);

}


export default app;