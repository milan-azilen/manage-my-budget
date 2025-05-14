import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBudgetLimitState } from "./budget-types";

const initialState: IBudgetLimitState = {
  loading: false,
  amount: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudgetLimit: (state, action: PayloadAction<{ amount: number }>) => {
      state.amount = action.payload.amount;
    },
  },
});

export const { setBudgetLimit } = budgetSlice.actions;
export default budgetSlice.reducer;
