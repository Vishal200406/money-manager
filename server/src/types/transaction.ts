export type TransactionType =
  | "income"
  | "expense";


export type Currency =
  | "USD"
  | "CAD"
  | "GBP"
  | "INR";



export interface Category {

  _id:string;

  name:string;

  icon?:string;

}



export interface Transaction {

  _id:string;

  type:TransactionType;

  amount:number;

  currency:Currency;

  description?:string;

  date:string;

  categoryId:Category;

}