import { styled } from 'styled-components'

export const Content = styled.div<{ color: string; fullWidth: boolean }>`
  max-width: ${(props) => (props.fullWidth ? '100%' : '1285px')};
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.color};
`
