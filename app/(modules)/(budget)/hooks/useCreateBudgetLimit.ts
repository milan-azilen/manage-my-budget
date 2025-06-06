import { FormError } from "@/app/shared/constants/AppConstants";
import { setBudgetLimit } from "@/app/shared/redux/modules/budget/budget-slice";
import { useAppSelector } from "@/app/shared/redux/useStore";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const initValues = {
  amount: "",
};

const validationSchema = Yup.object({
  amount: Yup.number()
    .min(0, FormError.budgetForm.amount.valid)
    .required(FormError.budgetForm.amount.required),
});

export const useCreateBudgetLimit = () => {
  const navigation = useNavigation();

  const { amount } = useAppSelector((state) => state.budget);

  const dispatch = useDispatch();
  const setBudgetLimitAmount = (amount: string) => {
    dispatch(
      setBudgetLimit({
        amount: +amount,
      })
    );
    navigation.goBack();
  };

  return {
    initValues,
    validationSchema,
    amount,
    setBudgetLimitAmount,
  };
};
