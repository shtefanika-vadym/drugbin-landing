import { flex } from 'common/style/mixins/flex.mixin'
import { textVariant } from 'common/style/mixins/typography.mixin'
import styled from 'styled-components'

export const FinishCollectContent = styled.div`
  ${flex({ direction: 'column', gap: '16px' })};
  min-height: 80vh;
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
  margin-top: auto;
`

export const QRCodeWrapper = styled.div`
  ${flex({ direction: 'column', alignItems: 'center', gap: '24px' })};
`

export const QRCode = styled.img``

export const BorderCorner = styled.div`
  padding: 12px;
`
