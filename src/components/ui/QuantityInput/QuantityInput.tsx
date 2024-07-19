import { toNumber } from "lodash-es";
import React, { InputHTMLAttributes, useCallback } from "react";
import { WDS_COLOR_NEUTRAL_RICHBLACK } from "src/styles/tokens";
import { Button } from "../Button/Button";
import { MinusIcon, PlusIcon } from "../Icon";
import { Input } from "../Input/Input";
import { Text } from "../Text/Text";
import {
  ButtonWrapper,
  Container,
  InputContainer,
} from "./QuantityInput.styled";

export interface QuantityInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  callbackOnChange: (selectedOption: number) => void;
}

export const QuantityInput = React.forwardRef<
  HTMLInputElement,
  QuantityInputProps
>((props, ref) => {
  const { callbackOnChange, label, value, onChange, ...rest } = props;

  const handleIncrement = useCallback(() => {
    callbackOnChange(toNumber(value) + 1);
  }, [callbackOnChange, value]);

  const handleDecrement = useCallback(() => {
    if (toNumber(value) > 1) {
      callbackOnChange(toNumber(value) - 1);
    }
  }, [callbackOnChange, value]);

  return (
    <Container>
      <InputContainer>
        <Text variant="inputLabel" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
          {label}
        </Text>
        <Input ref={ref} type="number" {...rest} />
      </InputContainer>
      <ButtonWrapper>
        <Button variant="ghost" size="S" onClick={handleDecrement}>
          <MinusIcon />
        </Button>
        <Button variant="ghost" size="S" onClick={handleIncrement}>
          <PlusIcon />
        </Button>
      </ButtonWrapper>
    </Container>
  );
});
