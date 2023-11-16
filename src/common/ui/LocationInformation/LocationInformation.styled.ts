import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'

export const LocationInformationWrapper = styled.div`
  ${flex({ direction: 'column', gap: '16px' })}
`

export const ButtonWrapper = styled.div`
  ${flex({ justifyContent: 'space-between' })}
`
