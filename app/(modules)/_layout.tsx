import React from "react";
import { AppBottomNavigation } from "../navigation/AppBottomNavigation";

export default function TabLayout() {
  return (
    <AppBottomNavigation
      screens={[
        {
          name: "(transactions)/index",
          title: "Transactions",
          icon: "list-circle-outline",
        },
        {
          name: "(budget)/create-budget-limit",
          title: "Budget",
          icon: "wallet-outline",
        },
      ]}
    />
  );
}
