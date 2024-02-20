import styled from 'styled-components';
import { TextVariantType, textVariant } from 'styles/mixins/typography.mixin';

export const StyledText = styled.p<{ variant: TextVariantType; color: string }>`
  ${({ variant }) => textVariant(variant)};
  color: ${({ color }) => color};
`
