import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'

export const Content = styled.div`
  ${flex({ direction: 'column', gap: '24px' })};
`

export const LocationWrapper = styled.div`
  ${flex({ direction: 'column', gap: '4px' })};
`

export const ButtonWrapper = styled.div`
  ${flex({ justifyContent: 'space-between' })};
`
