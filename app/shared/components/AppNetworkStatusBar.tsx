import { View } from "react-native";
import { useNetworkInfo } from "../hooks/useNetworkInfo";

export default function AppNetworkStatusBar() {
  const { isConnected } = useNetworkInfo();

  return (
    <View
      style={{
        padding: 2,
        backgroundColor: isConnected ? "lightgreen" : "red",
      }}
    />
  );
}
