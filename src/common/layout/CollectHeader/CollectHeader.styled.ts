import { styled } from 'styled-components'
import { WDS_COLOR_BLUE_100, WDS_COLOR_WHITE } from 'styles/colors'
import { flex } from 'styles/mixins/flex.mixin'

export const ContainerWrapperRecycle = styled.div`
  ${flex({ justifyContent: 'space-between' })};
  background: ${WDS_COLOR_WHITE};
  border-bottom: 1px solid ${WDS_COLOR_BLUE_100};
  z-index: 100;
  padding: 24px 16px;
`
export const Content = styled.div`
  ${flex({ justifyContent: 'center' })};
`

export const Icon = styled.img``
