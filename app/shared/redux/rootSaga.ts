import { all } from "redux-saga/effects";
import transactionSagas from "./modules/transactions/transaction-saga";

export default function* rootSaga() {
  yield all([transactionSagas()]);
}
