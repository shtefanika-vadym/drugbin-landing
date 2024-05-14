import { flex } from "src/styles/mixins/flex.mixin";
import {
  BREAKPOINTS,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_SIZE_008_PX,
  WDS_SIZE_024_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_048_PX,
  WDS_SIZE_400_PX,
  WDS_Z_INDEX_THROBBER,
} from "src/styles/tokens";
import styled from "styled-components";
import { Button } from "../Button/Button";

export const DIALOG_MIN_WIDTH = "560px";
export const DIALOG_MAX_WIDTH = "90%";

const DIALOG_CONTAINER_MAX_WIDTH_FOR_TABLET = `${WDS_SIZE_400_PX}`;
interface DialogContainerProps {
  zIndex?: number;
}

export const DialogContainer = styled.dialog.attrs({
  open: true,
})<DialogContainerProps>`
  all: unset;
  background-color: rgba(23, 23, 23, 0.48);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: ${({ zIndex }) => zIndex || WDS_Z_INDEX_THROBBER};
  ${flex({ alignItems: "center", justifyContent: "center" })};
`;

export const DialogContainerWithMaxWidth = styled(DialogContainer)`
  @media ${BREAKPOINTS.TABLET} {
    max-width: ${DIALOG_CONTAINER_MAX_WIDTH_FOR_TABLET};
  }
`;

export const DialogContent = styled.div`
  height: 100%;
  width: 100vw;
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  border-radius: ${WDS_SIZE_008_PX};
  overflow: auto;
  @media ${BREAKPOINTS.DESKTOP_S} {
    width: auto;
    min-width: ${DIALOG_MIN_WIDTH};
    max-width: ${DIALOG_MAX_WIDTH};
    height: fit-content;
    max-height: ${`calc(100vh - ${WDS_SIZE_048_PX})`};
    box-shadow: 0px 1px 2px rgba(17, 24, 28, 0.16),
      0px 8px 40px rgba(17, 24, 28, 0.2);
  }
`;

export const DialogForm = styled.form`
  ${flex({ direction: "column" })};
  padding: ${WDS_SIZE_024_PX} ${WDS_SIZE_032_PX};
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export const CloseButton = styled(Button)``;
