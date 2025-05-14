import { combineReducers } from "redux";
import budgetReducer from "./modules/budget/budget-slice";
import transactionsReducer from "./modules/transactions/transaction-slice";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  budget: budgetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
