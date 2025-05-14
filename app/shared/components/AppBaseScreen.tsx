import React, { FC, ReactNode, memo } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../constants/Spacing";
import AppNetworkStatusBar from "./AppNetworkStatusBar";

interface IAppBaseScreen {
  children: ReactNode;
}
export const AppBaseScreen: FC<IAppBaseScreen> = memo(({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNetworkStatusBar />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing(2),
  },
});
