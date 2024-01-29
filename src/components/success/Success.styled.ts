import styled from 'styled-components'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const Container = styled.div`
  ${flex({ direction: 'column', gap: '16px', alignItems: 'center' })};
  padding: 32px 16px;
  box-sizing: border-box;
`

export const Title = styled.h1`
  ${textVariant('titleH3')};
  text-align: center;
  padding-top: 12px;
`

export const Description = styled.p`
  ${textVariant('bodyM')};
  text-align: center;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  ${flex({ direction: 'column', gap: '8px' })};
  padding-top: 48px;
  margin-top: auto;
`

export const QRCodeWrapper = styled.div`
  ${flex({ direction: 'column', alignItems: 'center', gap: '24px' })};
`

export const QRCode = styled.img``

export const BorderCorner = styled.div`
  padding: 12px;
`

export const Content = styled.div`
  padding: 16px;
  ${flex({ direction: 'column', gap: '8px', alignItems: 'center' })};
`

export const Icon = styled.img`
  height: 24px;
`

export const DocumentWrapper = styled.div`
  ${flex({ direction: 'column', gap: '16px', alignItems: 'center' })};
`
