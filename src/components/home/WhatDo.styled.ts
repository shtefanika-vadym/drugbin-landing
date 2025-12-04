import { flex } from "src/styles/mixins/flex.mixin";
import { grid } from "src/styles/mixins/grid.mixin";
import {
  BREAKPOINTS,
  WDS_SIZE_008_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_024_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_048_PX,
  WDS_SIZE_272_PX,
  WDS_SIZE_350_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  ${grid({ gridTemplateColumns: "1fr 1fr", columnGap: WDS_SIZE_048_PX })};
  align-items: center;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    grid-template-columns: 1fr;
    row-gap: ${WDS_SIZE_032_PX};
  }
`;

export const TextContainer = styled.div`
  ${flex({
    direction: "column",
    gap: WDS_SIZE_024_PX,
    justifyContent: "center",
    alignItems: "center",
  })}
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${WDS_SIZE_032_PX};
`;

export const List = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })};
  margin-top: ${WDS_SIZE_032_PX};
`;

export const Icon = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const ListItem = styled.div`
  ${flex({ gap: WDS_SIZE_016_PX, alignItems: "center" })};
`;

export const FeatureCardsContainer = styled.div`
  ${grid({
    gridTemplateColumns: "1fr 1fr",
    columnGap: WDS_SIZE_024_PX,
    rowGap: WDS_SIZE_024_PX,
  })};
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${WDS_SIZE_008_PX};

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    height: ${WDS_SIZE_350_PX};
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    height: ${WDS_SIZE_272_PX};
  }
`;
