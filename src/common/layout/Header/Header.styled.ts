import styled from 'styled-components'

import { BREAKPOINTS, WDS_BREAKPOINT_TABLET_UP_TO } from 'common/constants/breakpoint'
import {
  WDS_COLOR_BLUE_100,
  WDS_COLOR_BLUE_300,
  WDS_COLOR_BLUE_400,
  WDS_COLOR_BLUE_700,
  WDS_COLOR_WHITE,
} from 'styles/colors'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'
import {
  WDS_SIZE_002_PX,
  WDS_SIZE_009_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_022_PX,
  WDS_SIZE_024_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_064_PX,
  WDS_SIZE_080_PX,
  WDS_SIZE_104_PX,
} from 'styles/size'

export const ContainerWrapper = styled.div`
  background: ${WDS_COLOR_WHITE};
  border-bottom: 1px solid ${WDS_COLOR_BLUE_100};

  @media (max-width: ${WDS_BREAKPOINT_TABLET_UP_TO}) {
    position: fixed;
    top: 0;
    width: 100%;
  }
`

export const Container = styled.div`
  ${flex({ direction: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  padding: ${WDS_SIZE_022_PX} ${WDS_SIZE_080_PX};
  position: relative;
  max-width: 1311px;
  margin: 0px auto;

  @media (max-width: ${WDS_BREAKPOINT_TABLET_UP_TO}) {
    padding: ${WDS_SIZE_024_PX} ${WDS_SIZE_016_PX};
  }
`

export const Navigation = styled.div`
  ${flex({ direction: 'row' })}
  gap: ${WDS_SIZE_032_PX};

  @media ${BREAKPOINTS.TABLET_UP_TO} {
   display: none;
  }
`

export const NavLink = styled.div<{ isActive?: boolean }>`
  color: ${({ isActive }) => (isActive ? WDS_COLOR_BLUE_700 : WDS_COLOR_BLUE_400)};
  ${flex({ direction: 'column', alignItems: 'center' })};
  padding-bottom: ${WDS_SIZE_002_PX};
  ${textVariant('subheading')};
  cursor: pointer;
`

export const Dot = styled.div<{ isActive: boolean }>`
  width: ${WDS_SIZE_009_PX};
  height: ${WDS_SIZE_009_PX};
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? WDS_COLOR_BLUE_300 : 'transparent')};
`

export const LogoWrapper = styled.div`
  ${flex({ alignItems: 'center' })};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  ${textVariant('titleH4')};
  color: ${WDS_COLOR_BLUE_300};
  cursor: pointer;
`

export const HamburgerMenu = styled.div`
  display: none;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
   display: unset;
  }
`

export const Content = styled.div`
  padding: ${WDS_SIZE_064_PX} 0;

  @media (max-width: ${WDS_BREAKPOINT_TABLET_UP_TO}) {
    padding: ${WDS_SIZE_104_PX} ${WDS_SIZE_016_PX};
  }
`

export const Name = styled.p`
  ${textVariant('bodyXS')};
  color: #01102e;
`

export const UserWrapper = styled.div`
  ${flex({ gap: '10px' })};
  cursor: pointer;
`
export const Icon = styled.img``

export const ContainerWrapperRecycle = styled(ContainerWrapper)`
  z-index: 100;
  ${flex({ justifyContent: 'space-between' })};
`
