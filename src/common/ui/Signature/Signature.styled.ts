import styled from 'styled-components'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const VerbalTitle = styled.h1`
  ${textVariant('titleH3')};
  font-weight: 700;
`

export const Container = styled.div`
  ${flex({ direction: 'column', gap: '24px' })};
`

export const TextBold = styled.p`
  ${textVariant('bodyM')};
  font-weight: 600;
  color: #000611;
`
export const Text = styled.p`
  ${textVariant('bodyM')};
  color: #000611;
`

export const ButtoWrapper = styled.div`
  ${flex({ justifyContent: 'space-between' })}
`
