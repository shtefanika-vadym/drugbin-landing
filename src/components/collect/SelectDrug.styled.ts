import {
  WDS_SIZE_008_PX,
  WDS_TEXT_FAMILY_BASE,
  WDS_TEXT_WEIGHT_DEMI,
  WDS_TEXT_WEIGHT_REGULAR,
} from "src/styles/tokens";
import {
  WDS_COLOR_BLUE_100,
  WDS_COLOR_NEUTRALGREY_50,
  WDS_COLOR_NEUTRAL_BLACK,
  WDS_COLOR_NEUTRAL_RICHBLACK,
} from "src/styles/tokens/colors";

// TODO: refactor
export const selectDrugStyles = {
  control: (provided: any) => ({
    ...provided,
    border: `1px solid ${WDS_COLOR_NEUTRALGREY_50}`,
    borderRadius: WDS_SIZE_008_PX,
    boxShadow: "none",
    fontSize: "13px",
    lineHeight: "18px",
    color: WDS_COLOR_NEUTRAL_RICHBLACK,
    height: "42px",
    display: "flex",
    alignContent: "center",
    "&:hover": {},
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: "16px",
    lineHeight: "20px",
    fontFamily: WDS_TEXT_FAMILY_BASE,
    letterSpacing: "normal",
    fontWeight: state.isSelected
      ? WDS_TEXT_WEIGHT_DEMI
      : WDS_TEXT_WEIGHT_REGULAR,
    color: state.isSelected ? WDS_COLOR_BLUE_100 : WDS_COLOR_NEUTRAL_BLACK,
    backgroundColor: "transparent",
  }),
  input: (provided: any) => ({
    ...provided,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontFamily: WDS_TEXT_FAMILY_BASE,
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: WDS_TEXT_WEIGHT_REGULAR,
    letterSpacing: "normal",
    textTransform: "none",
    fontStyle: "normal",
  }),
  menu: (provided: any) => ({
    ...provided,
    border: `1px solid ${WDS_COLOR_NEUTRALGREY_50}`,
    borderRadius: WDS_SIZE_008_PX,
    marginTop: "4px",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
};
