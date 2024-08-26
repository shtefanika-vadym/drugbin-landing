import React, { InputHTMLAttributes } from "react";
import { Text } from "../Text/Text";
import { Container, StyledInput } from "./Input.styled";
import { WDS_COLOR_NEUTRAL_RICHBLACK } from "src/styles/tokens";

export interface LabeledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  valid?: boolean;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, LabeledInputProps>(
  (props, ref) => {
    const {
      valid = true,
      label = "",
      type = "text",
      disabled = false,
      placeholder,
      className,
      ...rest
    } = props;

    return (
      <Container style={{ width: "100%" }}>
        {label && (
          <Text variant="inputLabel" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
            {label}
          </Text>
        )}
        <StyledInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          valid={valid}
          className={className}
          {...rest}
        />
      </Container>
    );
  }
);
