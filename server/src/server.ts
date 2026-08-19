import app from "./app";

import {
connectDatabase
}
from "./config/database";



connectDatabase()
.then(()=>{

console.log(
"Database ready"
);

})
.catch((error)=>{

console.error(
"Database error",
error
);

});



export default app;