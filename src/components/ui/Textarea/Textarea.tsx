import React, { TextareaHTMLAttributes } from "react";
import { Text } from "../Text/Text";
import { Container, StyledTextarea } from "./Textarea.styled";
import { WDS_COLOR_NEUTRAL_RICHBLACK } from "src/styles/tokens";

export interface LabeledTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  valid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, LabeledTextareaProps>(
  (props, ref) => {
    const {
      valid = true,
      label = "",
      disabled = false,
      placeholder,
      ...rest
    } = props;

    return (
      <Container style={{ width: "100%" }}>
        {label && (
          <Text variant="inputLabel" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
            {label}
          </Text>
        )}
        <StyledTextarea
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          valid={valid}
          {...rest}
        />
      </Container>
    );
  }
);
