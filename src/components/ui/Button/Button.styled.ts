import { border } from "src/styles/mixins/border.mixin";
import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_BLUE_300,
  WDS_COLOR_BUTTON_SECONDARY_BACKGROUND,
  WDS_COLOR_NEUTRALGREY_50,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_100,
  WDS_COLOR_PRIMARY_50,
  WDS_SIZE_006_PX,
  WDS_SIZE_008_PX,
  WDS_SIZE_010_PX,
  WDS_SIZE_012_PX,
  WDS_SIZE_014_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_018_PX,
  WDS_SIZE_020_PX,
  WDS_SIZE_024_PX,
  WDS_TEXT_WEIGHT_DEMI,
} from "src/styles/tokens";
import styled, { css } from "styled-components";
import { StyledButtonProps } from "./Button.types";
import { textVariant } from "src/styles/mixins/typography.mixin";

const fontSmall = css`
  font-size: ${WDS_SIZE_014_PX};
  line-height: ${WDS_SIZE_020_PX};
`;

const fontNormal = css`
  font-size: ${WDS_SIZE_016_PX};
  line-height: ${WDS_SIZE_024_PX};
`;

export const buttonVariants = {
  primary: css`
    color: ${WDS_COLOR_NEUTRAL_WHITE};
    background-color: ${WDS_COLOR_PRIMARY_50};

    &:hover {
      background-color: ${WDS_COLOR_PRIMARY_50};
    }
    &:active {
      background-color: ${WDS_COLOR_PRIMARY_50};
    }
  `,
  secondary: css`
    color: ${WDS_COLOR_PRIMARY_50};
    background-color: ${WDS_COLOR_NEUTRAL_WHITE};
    ${border({ inside: true, color: WDS_COLOR_PRIMARY_50 })}

    &:hover {
      background-color: ${WDS_COLOR_BUTTON_SECONDARY_BACKGROUND};
    }
    &:active {
      background-color: ${WDS_COLOR_BUTTON_SECONDARY_BACKGROUND};
    }
    &:disabled {
      ${border({ inside: true, color: WDS_COLOR_NEUTRALGREY_50 })}
      background-color: ${WDS_COLOR_BUTTON_SECONDARY_BACKGROUND} !important;
    }
  `,
  ghost: css`
    color: ${WDS_COLOR_PRIMARY_50};
    background-color: transparent;

    &:hover {
      background-color: ${WDS_COLOR_BUTTON_SECONDARY_BACKGROUND};
    }
  `,
  document: css`
    color: ${WDS_COLOR_BLUE_300};
    background-color: ${WDS_COLOR_PRIMARY_100};
  `,
  white: css`
    color: ${WDS_COLOR_PRIMARY_50};
    background-color: ${WDS_COLOR_BUTTON_SECONDARY_BACKGROUND};
  `,
};

export const buttonSizes = {
  XS: css`
    ${fontSmall};
    padding: ${WDS_SIZE_006_PX} ${WDS_SIZE_010_PX};
    gap: ${WDS_SIZE_010_PX};
  `,
  S: css`
    ${fontSmall};
    padding: ${WDS_SIZE_008_PX} ${WDS_SIZE_010_PX};
    gap: ${WDS_SIZE_010_PX};
  `,
  M: css`
    ${fontSmall};
    padding: ${WDS_SIZE_010_PX} ${WDS_SIZE_024_PX};
    gap: ${WDS_SIZE_012_PX};
  `,
  L: css`
    ${fontNormal};
    padding: ${WDS_SIZE_012_PX} ${WDS_SIZE_018_PX};
    gap: ${WDS_SIZE_014_PX};
  `,
  XL: css`
    ${fontNormal};
    padding: ${WDS_SIZE_016_PX} ${WDS_SIZE_018_PX};
    gap: ${WDS_SIZE_014_PX};
  `,
  FULL: css`
    width: 100%;
    padding: ${WDS_SIZE_008_PX} ${WDS_SIZE_010_PX};
    gap: ${WDS_SIZE_010_PX};
    ${fontSmall};
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  cursor: pointer;
  letter-spacing: 0.06em;
  ${textVariant("bodyS")};
  font-weight: ${WDS_TEXT_WEIGHT_DEMI};
  transition-property: background-color, border-color;
  transition-duration: 0.2s;
  box-sizing: border-box;
  border-radius: 8px;
  ${flex({
    justifyContent: "center",
    alignItems: "center",
    gap: WDS_SIZE_008_PX,
  })};
  ${({ variant }) => buttonVariants[variant]};
  ${({ size }) => buttonSizes[size]};
  &:disabled {
    cursor: not-allowed;
    color: ${WDS_COLOR_NEUTRALGREY_50};
    background-color: ${WDS_COLOR_NEUTRALGREY_50};
  }
`;
