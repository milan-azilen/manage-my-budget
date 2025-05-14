import { AppBaseScreen } from "@/app/shared/components/AppBaseScreen";
import { AppButton } from "@/app/shared/components/AppButton";
import { AppInput } from "@/app/shared/components/AppInput";
import { Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { useCreateBudgetLimit } from "./hooks/useCreateBudgetLimit";

export default function CreateBudgetLimitScreen() {
  const { amount, initValues, validationSchema, setBudgetLimitAmount } =
    useCreateBudgetLimit();
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.setFieldValue("amount", `${amount}`);
  }, [ref.current, amount]);

  return (
    <AppBaseScreen>
      <Formik
        innerRef={ref}
        initialValues={initValues}
        onSubmit={(values) => {
          setBudgetLimitAmount(values.amount);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit }) => {
          return (
            <>
              <AppInput
                value={values.amount}
                onChangeText={(t) => {
                  setFieldValue("amount", t);
                }}
                error={touched.amount && errors.amount}
                placeholder="Amount"
              />
              <AppButton
                onPress={() => {
                  handleSubmit();
                }}
                title="Save"
              />
            </>
          );
        }}
      </Formik>
    </AppBaseScreen>
  );
}
