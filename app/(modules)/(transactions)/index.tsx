import { AppBaseScreen } from "@/app/shared/components/AppBaseScreen";
import { AppProgressBar } from "@/app/shared/components/AppProgressBar";
import { spacing } from "@/app/shared/contants/Spacing";
import React from "react";
import { FlatList } from "react-native";
import { AppTransactionItemComponent } from "./components/AppTransactionItem";
import { useGetTransactions } from "./hooks/useGetTransactions";
export default function TransactionScreen() {
  const { data, error, loading, refresh, spentPercentage, spent, budgetLimit } =
    useGetTransactions();

  return (
    <AppBaseScreen>
      <AppProgressBar
        percentage={spentPercentage}
        total={budgetLimit}
        current={spent}
      />
      <FlatList
        contentContainerStyle={{ paddingBottom: spacing(10) }}
        data={data ?? []}
        refreshing={loading}
        onRefresh={refresh}
        renderItem={({ item }) => {
          return <AppTransactionItemComponent {...item} />;
        }}
        keyExtractor={d => `${d.id}`}
      />
    </AppBaseScreen>
  );
}
