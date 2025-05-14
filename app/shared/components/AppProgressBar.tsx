import { Box, Center, HStack, Progress, VStack } from "native-base";
import React, { FC, useMemo } from "react";
import { Text } from "react-native";
import { formatAmount } from "../utils/currencyUtils";

interface IAppProgressBar {
  percentage: number;
  total: number;
  current: number;
}

export const AppProgressBar: FC<IAppProgressBar> = ({
  percentage,
  total,
  current,
}) => {
  const color = useMemo(() => {
    let color = "primary";
    if (percentage > 70) {
      color = "warning";
    }
    if (percentage > 50) {
      color = "warning";
    }
    if (percentage >= 100) {
      color = "danger";
    }
    return color;
  }, [percentage]);

  return (
    <Center w="100%">
      <Box w="100%">
        <VStack space="md" my={5}>
          <VStack space="md">
            <Text>Budget Status</Text>
          </VStack>
          <VStack space="md">
            <Progress colorScheme={color} value={percentage} />
          </VStack>
          <HStack space="md" justifyContent={"space-between"}>
            <Text
              style={{
                left: `${percentage - 5}%`,
                opacity: percentage < 90 ? 1 : 0,
              }}
            >
              {formatAmount(current)}
            </Text>
            <Text>{formatAmount(total)}</Text>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
