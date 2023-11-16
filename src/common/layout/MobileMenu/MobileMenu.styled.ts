import styled from 'styled-components'

import { WDS_COLOR_WHITE } from 'styles/colors'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

export const MenuContent = styled.nav`
  position: absolute;
  width: calc(100% - 48px);
  bottom: 0;
  background-color: ${WDS_COLOR_WHITE};
  padding: 24px;
  box-shadow:
    0px 0px 2px rgba(0, 0, 0, 0.12),
    1px -6px 20px rgba(0, 0, 0, 0.08);
  border-radius: 16px 16px 0px 0px;
  ${flex({ direction: 'column', gap: '24px' })};
  transition: transform 0.3s ease-in-out;
`
export const Title = styled.div`
  ${textVariant('titleH4')};
`

export const Icon = styled.img``

export const ItemWrapper = styled.div`
  ${flex({ gap: '12px' })};
  cursor: pointer;
`
export const Text = styled.p`
  ${textVariant('bodyL')};
  color: #011640;
`
export const BorderStyle = styled.div`
  border-bottom: 1px solid #ebf0fb;
`

export const LanguageContainer = styled.div`
  ${flex({ justifyContent: 'space-between' })};
`

export const ButtonWrapper = styled.div`
  padding: 16px 0;
  margin: 0 auto;
`
