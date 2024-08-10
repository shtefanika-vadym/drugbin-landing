import { flex } from "src/styles/mixins/flex.mixin";
import { WDS_SIZE_008_PX, WDS_SIZE_012_PX, WDS_SIZE_016_PX } from "src/styles/tokens";
import styled from "styled-components";
import { Button } from "../ui/Button/Button";

export const Container = styled.form`
  width: 100%;
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })};
`;

export const DropdownWrapper = styled.div`
  /* ${flex({ gap: WDS_SIZE_008_PX, alignItems: 'center', justifyContent: 'center' })}; */
  width: 100%;
`;

export const LocationButton = styled(Button)`
  margin-top: ${WDS_SIZE_012_PX};
`