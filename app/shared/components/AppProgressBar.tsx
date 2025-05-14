import { Box, Center, HStack, Progress, VStack } from "native-base";
import React, { FC, useMemo } from "react";
import { formatAmount } from "../utils/currencyUtils";
import { AppTypoGraphy } from "./AppTypography";

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
            <AppTypoGraphy>Budget Status</AppTypoGraphy>
          </VStack>
          <VStack space="md">
            <Progress colorScheme={color} value={percentage} />
          </VStack>
          <HStack space="md" justifyContent={"space-between"}>
            <AppTypoGraphy
              style={{
                left: `${percentage - 5}%`,
                opacity: percentage < 90 ? 1 : 0,
              }}
            >
              {formatAmount(current)}
            </AppTypoGraphy>
            <AppTypoGraphy>{formatAmount(total)}</AppTypoGraphy>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
