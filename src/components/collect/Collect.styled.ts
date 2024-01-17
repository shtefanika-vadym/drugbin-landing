import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'

export const ButtonWrapper = styled.div`
  width: 100%;
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'flex-end' })}
`

export const Content = styled.div`
  max-width: 600px;
  ${flex({ direction: 'column', gap: '24px', alignItems: 'center' })};
  box-sizing: border-box;
  padding: 24px 12px;
`
