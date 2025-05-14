export type TransactionOperation = "debit" | "credit";
export interface ITransactionItem {
  id: number;
  amount: number;
  operation: TransactionOperation;
  date: string;
  title: string;
  description?: string;
  formatedDate?: string;
  formatedAmount?: string;
}
export interface ITransactionState {
  loading: boolean;
  data: ITransactionItem[];
  error: any | null;
}
