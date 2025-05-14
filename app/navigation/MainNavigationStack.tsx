import { Stack } from "expo-router";
import React from "react";

export const MainNavigationStack = () => {
  return (
    <Stack>
      <Stack.Screen name="(modules)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};
