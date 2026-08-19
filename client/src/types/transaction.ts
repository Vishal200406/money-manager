export type TransactionType =
  | "income"
  | "expense";


export type Currency =
  | "USD"
  | "CAD"
  | "GBP"
  | "INR";


export interface Transaction {

  _id: string;

  type: TransactionType;

  amount: number;

  currency: Currency;

  description?: string;

  date: string;

  categoryId?: {

    name: string;

    icon?: string;

  };

}