import { AppTypoGraphy } from "@/app/shared/components/AppTypography";
import { ITransactionItem } from "@/app/shared/redux/modules/transactions/transaction-types";
import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, Icon, Spacer, VStack } from "native-base";
import { memo } from "react";

const AppTransactionItem = ({
  title,
  description,
  formatedAmount,
  formatedDate,
  operation,
}: ITransactionItem) => {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: "muted.50",
      }}
      borderColor="muted.800"
      pl={["0", "4"]}
      pr={["0", "5"]}
      py="2"
    >
      <HStack space={[2, 3]} justifyContent="space-between">
        <VStack>
          <AppTypoGraphy
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {formatedAmount}
          </AppTypoGraphy>
          <AppTypoGraphy
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {title}
          </AppTypoGraphy>
        </VStack>
        <Spacer />
        <AppTypoGraphy
          fontSize="xs"
          _dark={{
            color: "warmGray.50",
          }}
          color="coolGray.800"
          alignSelf="flex-start"
        >
          {formatedDate}
        </AppTypoGraphy>
        <Icon
          as={Ionicons}
          name="cash-outline"
          color={operation === "debit" ? "danger.400" : "success.400"}
        />
      </HStack>
    </Box>
  );
};

export const AppTransactionItemComponent = memo(AppTransactionItem);
