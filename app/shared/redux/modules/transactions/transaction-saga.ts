import { fetchTransactions } from "@/app/shared/apis/transactions";
import { formatAmount } from "@/app/shared/utils/currencyUtils";
import { formateDate } from "@/app/shared/utils/dateUtils";
import { call, put, takeLatest } from "redux-saga/effects";
import { failedTransactions, setTransactions } from "./transaction-slice";
import { ITransactionItem } from "./transaction-types";

function* fetchTransaction() {
  try {
    const response = yield call(fetchTransactions);
    const formatedResponse = response?.map((r: ITransactionItem) => {
      return {
        ...r,
        formatedDate: formateDate(r.date),
        formatedAmount: formatAmount(r.amount),
      };
    });
    if (formatedResponse?.length > 0) {
      yield put(setTransactions({ data: formatedResponse }));
    }
  } catch (error) {
    yield put(failedTransactions({ error }));
  }
}

export default function* transactionSagas() {
  yield takeLatest("transaction/requestTransactions", fetchTransaction);
}
