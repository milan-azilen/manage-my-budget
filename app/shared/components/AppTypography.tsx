import { ITextProps, Text } from "native-base";
import React, { FC, memo } from "react";

export const AppTypoGraphy: FC<ITextProps> = memo(
  ({ children, style, ...rest }) => {
    return (
      <Text style={style} {...rest}>
        {children}
      </Text>
    );
  }
);
