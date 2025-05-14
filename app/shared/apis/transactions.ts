import { ITransactionItem } from "../redux/modules/transactions/transaction-types";
import { axiosInstance } from "./axiosInstance";

export const fetchTransactions = (): Promise<ITransactionItem[]> => {
  return axiosInstance.get("transactions");
};
