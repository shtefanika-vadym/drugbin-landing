import { flex } from 'styles/mixins/flex.mixin'
import styled from 'styled-components'
import type { LoaderProps } from './Loader'

type ContainerProps = Pick<LoaderProps, 'justify' | 'spacing'>

export const Container = styled.div<ContainerProps>`
  ${(props) => props.justify && flex({ justifyContent: props.justify })};
  ${(props) => props.spacing && `padding: ${props.spacing}`}
`
