import { Text } from "src/components/ui/Text/Text";
import { flex } from "src/styles/mixins/flex.mixin";
import {
  BREAKPOINTS,
  WDS_COLOR_PRIMARY_50,
  WDS_SIZE_024_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  ${flex({
    direction: "column",
    gap: WDS_SIZE_024_PX,
    justifyContent: "center",
    alignItems: "center",
  })}
  max-width: 847px;
  margin: 0 auto;
  text-align: center;
`;

export const HomeText = styled(Text).attrs({
  variant: "bodyM",
})`
  color: ${WDS_COLOR_PRIMARY_50};
`;

export const Image = styled.img`
  width: 100%;
  padding-top: ${WDS_SIZE_024_PX};
  height: 570px;

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    height: 270px;
  }
`;

export const Video = styled.video`
  width: 100%;
  padding-top: ${WDS_SIZE_024_PX};

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    height: 270px;
  }
`;
