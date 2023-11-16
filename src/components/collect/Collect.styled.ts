import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'

export const ButtonWrapper = styled.div`
  width: 100%;
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'flex-end' })}
`

export const RecycleWrapper = styled.div`
  width: calc(100% - 24px);
  padding: 24px 12px;
  ${flex({ direction: 'column', gap: '24px' })};
`
