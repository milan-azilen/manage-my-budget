import { Box, Button, IButtonProps, useTheme } from "native-base";
import React, { FC, memo } from "react";

export const AppButton: FC<
  IButtonProps & {
    title: string;
    onPress: () => void;
  }
> = memo(({ onPress, title }) => {
  const theme = useTheme();
  return (
    <Box alignItems="center" mt={"2"}>
      <Button
        width={"100%"}
        onPress={onPress}
        backgroundColor={theme.colors.primary[900]}
      >
        {title}
      </Button>
    </Box>
  );
});
