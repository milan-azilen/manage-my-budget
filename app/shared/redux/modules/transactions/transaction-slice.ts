import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransactionState } from "./transaction-types";

const initialState: ITransactionState = {
  loading: false,
  data: [],
  error: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    requestTransactions: (state) => {
      state.loading = true;
      state.error = null;
    },
    setTransactions: (state, action: PayloadAction<{ data: [] }>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data;
    },
    failedTransactions: (state, action: PayloadAction<{ error: any }>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { requestTransactions, setTransactions, failedTransactions } =
  transactionSlice.actions;
export default transactionSlice.reducer;
