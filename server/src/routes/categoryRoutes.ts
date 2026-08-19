import { Router } from "express";


import {

createCategory,

getCategories,

deleteCategory,

} from "../controllers/categoryController";


import {

protect

} from "../middleware/authMiddleware";



const router =
Router();



router.post(

"/",

protect,

createCategory

);



router.get(

"/",

protect,

getCategories

);



router.delete(

"/:id",

protect,

deleteCategory

);



export default router;