import { flex } from "src/styles/mixins/flex.mixin";
import {
  BREAKPOINTS,
  WDS_SIZE_024_PX,
  WDS_SIZE_048_PX,
  WDS_SIZE_096_PX,
  WDS_SIZE_272_PX,
  WDS_SIZE_350_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  ${flex({ direction: "column", gap: WDS_SIZE_096_PX })}

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    ${flex({ direction: "column", gap: WDS_SIZE_048_PX })}
  }
`;

export const TopContent = styled.div`
  max-width: 847px;
  ${flex({ direction: "column", gap: WDS_SIZE_024_PX  })}
  text-align: center;
  margin: 0 auto;
`;

export const Content = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${WDS_SIZE_048_PX};
  grid-template-areas: ${({ reverse }) =>
    reverse ? '"img description"' : '"description img"'};

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    grid-template-columns: 1fr;
    row-gap: ${WDS_SIZE_048_PX};
    grid-template-areas:
      "description"
      "img";
  }
`;

export const Description = styled.div`
  grid-area: description;
  margin: auto;
  ${flex({ direction: "column", gap: WDS_SIZE_024_PX })}
`;

export const Image = styled.img`
  grid-area: img;
  width: 100%;
  height: auto;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    height: ${WDS_SIZE_350_PX};
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    height: ${WDS_SIZE_272_PX};
  }
`;
