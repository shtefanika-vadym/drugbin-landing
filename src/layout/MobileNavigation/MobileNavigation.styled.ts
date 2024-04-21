import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_100,
  WDS_SIZE_012_PX,
  WDS_SIZE_024_PX,
  WDS_SIZE_036_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Navigation = styled.nav`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: ${WDS_SIZE_036_PX} ${WDS_SIZE_024_PX};
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  padding: ${WDS_SIZE_024_PX};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 1px -6px 20px rgba(0, 0, 0, 0.08);
  border-radius: 16px 16px 0px 0px;
  ${flex({ direction: "column", gap: WDS_SIZE_024_PX })};
  transition: transform 0.3s ease-in-out;
  box-sizing: border-box;
`;

export const NavLink = styled.a`
  ${flex({ gap: WDS_SIZE_012_PX, alignItems: "center" })};
  text-decoration: none;
`;

export const Border = styled.div`
  border-bottom: 1px solid ${WDS_COLOR_PRIMARY_100};
`;
