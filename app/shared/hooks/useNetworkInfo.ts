import * as Network from "expo-network";
import { useCallback, useEffect, useState } from "react";

export const useNetworkInfo = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const checkNetwork = useCallback(async () => {
    const state = await Network.getNetworkStateAsync();
    setIsConnected(state.isConnected!);
  }, []);

  useEffect(() => {
    checkNetwork();
    const subscription = Network.addNetworkStateListener((state) => {
      setIsConnected(state.isConnected!);
    });

    return () => subscription?.remove?.();
  }, []);

  return { isConnected };
};
