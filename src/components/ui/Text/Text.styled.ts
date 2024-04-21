import React from 'react';
import styled, { css } from 'styled-components';
import { StyledElementProps, TextProps } from './Text.types';
import { textVariant } from 'src/styles/mixins/typography.mixin';
import { WDS_COLOR_NEUTRAL_RICHBLACK } from 'src/styles/tokens';

const Element: React.FC<TextProps> = ({
  element = 'span',
  children,
  ...rest
}) => React.createElement(element, rest, children);

export const StyledElement = styled(Element)<StyledElementProps>(
  ({ variant = 'bodyS', transform, color = WDS_COLOR_NEUTRAL_RICHBLACK }) => `
  ${textVariant(variant)};
  display: block;
  white-space: pre-wrap;
  color: ${color};

  ${
    transform &&
    css`
      text-transform: ${transform};
    `
  }
  `
);
