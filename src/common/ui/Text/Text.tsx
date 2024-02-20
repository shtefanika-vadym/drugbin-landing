import type { ReactNode } from 'react'
import { WDS_COLOR_BLACK } from 'styles/colors'
import { TextVariantType } from 'styles/mixins/typography.mixin'
import { StyledText } from './Text.styled'

interface TextProps {
  textVariant: TextVariantType
  color?: string
  children: ReactNode
}

export const Text: React.FC<TextProps> = ({ textVariant, color = WDS_COLOR_BLACK, children }) => {
  return (
    <StyledText variant={textVariant} color={color}>
      {children}
    </StyledText>
  )
}
