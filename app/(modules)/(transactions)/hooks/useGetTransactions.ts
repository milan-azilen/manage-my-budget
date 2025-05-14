import { requestTransactions } from "@/app/shared/redux/modules/transactions/transaction-slice";
import { useAppSelector } from "@/app/shared/redux/useStore";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

export const useGetTransactions = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useAppSelector(
    (state) => state.transactions
  );

  const { amount: budgetLimit } = useAppSelector((state) => state.budget);

  const refresh = () => {
    dispatch(requestTransactions());
  };

  useEffect(() => {
    refresh();
  }, []);

  const spent = useMemo(() => {
    return data
      ?.filter((d) => {
        return d.operation === "debit";
      })
      ?.reduce((acc, item) => {
        acc = acc + +item.amount;
        return acc;
      }, 0);
  }, [data?.length]);

  const spentPercentage = useMemo(() => {
    if (budgetLimit) {
      const percentage = (spent * 100) / budgetLimit;
      if (percentage > 100) {
        return 100;
      }
      return Math.round(percentage);
    }
    return 0;
  }, [budgetLimit, spent]);

  return {
    refresh,
    data,
    loading,
    error,
    spentPercentage,
    spent,
    budgetLimit,
  };
};
