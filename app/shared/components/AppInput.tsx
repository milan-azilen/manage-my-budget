import { Box, FormControl, IInputProps, Input } from "native-base";
import React, { FC, memo } from "react";

export const AppInput: FC<Partial<IInputProps & { error?: string | false }>> =
  memo(({ error, placeholder, onChangeText, value }) => {
    return (
      <Box alignItems="center">
        <FormControl isInvalid={error as boolean}>
          <FormControl.Label>{placeholder}</FormControl.Label>
          <Input
            value={value}
            placeholder={placeholder}
            w="100%"
            onChangeText={onChangeText}
          />
          {error && error !== "" ? (
            <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
          ) : null}
        </FormControl>
      </Box>
    );
  });
