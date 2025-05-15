import { Box, FormControl, IInputProps } from "native-base";
import React, { FC, memo } from "react";
import { StyleSheet, TextInput } from "react-native";

export const AppInput: FC<Partial<IInputProps & { error?: string | false }>> =
  memo(({ error, placeholder, onChangeText, value, keyboardType }) => {
    return (
      <Box alignItems="center">
        <FormControl isInvalid={error as boolean}>
          <FormControl.Label>{placeholder}</FormControl.Label>
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={styles.input}
            keyboardType={keyboardType}
          />
          {error && error !== "" ? (
            <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
          ) : null}
        </FormControl>
      </Box>
    );
  });

  const styles = StyleSheet.create({input: {
    borderColor: '#e7e7ed7',
    borderWidth: 1,
    padding: 12,
  }})