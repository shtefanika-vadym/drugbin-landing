import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_50,
  WDS_SIZE_008_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_024_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_040_PX,
  BREAKPOINTS,
} from "src/styles/tokens";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  ${flex({ alignItems: "center", gap: WDS_SIZE_016_PX })};
  position: relative;
  width: 100%;

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    gap: ${WDS_SIZE_008_PX};
  }
`;

export const CarouselWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  touch-action: pan-y pinch-zoom;
  
  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    touch-action: pan-x;
  }
`;

export const CarouselContent = styled.div<{
  $currentIndex: number;
  $itemsToShow: number;
  $isMobile: boolean;
}>`
  display: flex;
  gap: ${WDS_SIZE_024_PX};
  transition: transform 0.3s ease;
  /* width: fit-content; */

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    gap: ${WDS_SIZE_016_PX};
    transform: translateX(
      calc(-${({ $currentIndex }) => $currentIndex} * (100% + ${WDS_SIZE_016_PX}))
    );
  }

  @media ${BREAKPOINTS.TABLET} {
    transform: translateX(
      calc(-${({ $currentIndex, $itemsToShow }) => $currentIndex} * ((100% - (${({ $itemsToShow }) => $itemsToShow - 1} * ${WDS_SIZE_024_PX})) / ${({ $itemsToShow }) => $itemsToShow} + ${WDS_SIZE_024_PX}))
    );
  }
`;

export const CardWrapper = styled.div<{ $itemsToShow: number; $isMobile: boolean }>`
  min-width: 0;
  flex-shrink: 0;
  width: calc((100% - (${({ $itemsToShow }) => $itemsToShow - 1} * ${WDS_SIZE_024_PX})) / ${({ $itemsToShow }) => $itemsToShow});
  
  > * {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    width: 100%;
  }
`;

export const NavButton = styled.button<{ $isLeft?: boolean }>`
  ${flex({ alignItems: "center", justifyContent: "center" })};
  width: ${WDS_SIZE_040_PX};
  height: ${WDS_SIZE_040_PX};
  border-radius: 50%;
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  border: 1px solid ${WDS_COLOR_PRIMARY_50};
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background-color: ${WDS_COLOR_PRIMARY_50};
    color: ${WDS_COLOR_NEUTRAL_WHITE};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: ${WDS_SIZE_024_PX};
    height: ${WDS_SIZE_024_PX};
    transform: ${({ $isLeft }) => ($isLeft ? "rotate(180deg)" : "none")};
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    width: ${WDS_SIZE_032_PX};
    height: ${WDS_SIZE_032_PX};
  }
`;

