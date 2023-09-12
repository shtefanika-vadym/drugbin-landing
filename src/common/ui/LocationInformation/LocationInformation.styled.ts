import styled from 'styled-components'

import { WDS_COLOR_BLUE_300 } from 'common/style/colors'
import { flex } from 'common/style/mixins/flex.mixin'
import { textVariant } from 'common/style/mixins/typography.mixin'

export const LocationInformationWrapper = styled.div`
  ${flex({ direction: 'column', gap: '16px' })}
`

export const PharmaCardDetails = styled.div<{ isActive: boolean }>`
  border: ${({ isActive }) => isActive && `1px solid ${WDS_COLOR_BLUE_300}`};
  ${flex({ direction: 'column', gap: '8px' })};
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
`

export const Description = styled.p`
  ${textVariant('bodyS')};
  color: #011640;
`

export const Name = styled.p`
  ${textVariant('bodyM')};
  color: #000611;
`

export const Email = styled.p`
  ${textVariant('bodyS')};
  color: #a3a6ad;
`

export const Image = styled.img``

export const Test = styled.div`
  position: absolute;
  top: 0;
  height: auto;
  background-color: red;
`

export const ButtonWrapper = styled.div`
  ${flex({ justifyContent: 'space-between' })}
`
