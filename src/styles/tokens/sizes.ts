import { Dictionary } from "@/types/utils.types";
import { remToPxVal } from "../cssHelpers";
import {
  WDS_BREAKPOINT_DESKTOP_L,
  WDS_BREAKPOINT_DESKTOP_LARGE,
  WDS_BREAKPOINT_DESKTOP_M,
  WDS_BREAKPOINT_DESKTOP_M_UP_TO,
  WDS_BREAKPOINT_DESKTOP_S,
  WDS_BREAKPOINT_DESKTOP_S_UP_TO,
  WDS_BREAKPOINT_HEIGHT_TABLET_UP_TO,
  WDS_BREAKPOINT_MOBILE,
  WDS_BREAKPOINT_MOBILE_UP_TO,
  WDS_BREAKPOINT_TABLET,
  WDS_BREAKPOINT_TABLET_UP_TO,
} from "./breakpoints";

export const WDS_SIZE_001_PX = "0.0625rem";
export const WDS_SIZE_002_PX = "0.125rem";
export const WDS_SIZE_003_PX = "0.188rem";
export const WDS_SIZE_004_PX = "0.25rem";
export const WDS_SIZE_005_PX = "0.313rem";
export const WDS_SIZE_006_PX = "0.375rem";
export const WDS_SIZE_007_PX = "0.4375rem";
export const WDS_SIZE_008_PX = "0.5rem";
export const WDS_SIZE_009_PX = "0.562rem";
export const WDS_SIZE_010_PX = "0.625rem";
export const WDS_SIZE_012_PX = "0.75rem";
export const WDS_SIZE_014_PX = "0.875rem";
export const WDS_SIZE_016_PX = "1rem"; // The base size
export const WDS_SIZE_018_PX = "1.125rem";
export const WDS_SIZE_019_PX = "1.188rem";
export const WDS_SIZE_020_PX = "1.25rem";
export const WDS_SIZE_022_PX = "1.375rem";
export const WDS_SIZE_024_PX = "1.5rem";
export const WDS_SIZE_028_PX = "1.75rem";
export const WDS_SIZE_030_PX = "1.875rem";
export const WDS_SIZE_032_PX = "2rem";
export const WDS_SIZE_036_PX = "2.25rem";
export const WDS_SIZE_040_PX = "2.5rem";
export const WDS_SIZE_042_PX = "2.62rem";
export const WDS_SIZE_048_PX = "3rem";
export const WDS_SIZE_050_PX = "3.125rem";
export const WDS_SIZE_056_PX = "3.5rem";
export const WDS_SIZE_064_PX = "4rem";
export const WDS_SIZE_068_PX = "4.258rem";
export const WDS_SIZE_072_PX = "4.5rem";
export const WDS_SIZE_075_PX = "4.688rem";
export const WDS_SIZE_080_PX = "5rem";
export const WDS_SIZE_084_PX = "5.25rem";
export const WDS_SIZE_088_PX = "5.5rem";
export const WDS_SIZE_092_PX = "5.75rem";
export const WDS_SIZE_096_PX = "6rem";
export const WDS_SIZE_104_PX = "6.5rem";
export const WDS_SIZE_112_PX = "7rem";
export const WDS_SIZE_120_PX = "7.5rem";
export const WDS_SIZE_128_PX = "8rem";
export const WDS_SIZE_136_PX = "8.5rem";
export const WDS_SIZE_144_PX = "9rem";
export const WDS_SIZE_160_PX = "10rem";
export const WDS_SIZE_170_PX = "10.625rem";
export const WDS_SIZE_172_PX = "10.75rem";
export const WDS_SIZE_176_PX = "11rem";
export const WDS_SIZE_192_PX = "12rem";
export const WDS_SIZE_200_PX = "12.5rem";
export const WDS_SIZE_224_PX = "14rem";
export const WDS_SIZE_256_PX = "16rem";
export const WDS_SIZE_272_PX = "17rem";
export const WDS_SIZE_296_PX = "18.5rem";
export const WDS_SIZE_300_PX = "18.75rem";
export const WDS_SIZE_315_PX = "19.68rem";
export const WDS_SIZE_350_PX = "21.88rem";
export const WDS_SIZE_400_PX = "25rem";
export const WDS_SIZE_416_PX = "26rem";
export const WDS_SIZE_488_PX = "30.5rem";
export const WDS_SIZE_520_PX = "32.5rem";
export const WDS_SIZE_650_PX = "40.625rem";
export const WDS_SIZE_890_PX = "55.6rem";
export const WDS_SIZE_1000_PX = "62.5rem";

export const WDS_SIZE_001_PX_UNITLESS = remToPxVal(WDS_SIZE_001_PX);
export const WDS_SIZE_002_PX_UNITLESS = remToPxVal(WDS_SIZE_002_PX);
export const WDS_SIZE_003_PX_UNITLESS = remToPxVal(WDS_SIZE_003_PX);
export const WDS_SIZE_004_PX_UNITLESS = remToPxVal(WDS_SIZE_004_PX);
export const WDS_SIZE_005_PX_UNITLESS = remToPxVal(WDS_SIZE_005_PX);
export const WDS_SIZE_006_PX_UNITLESS = remToPxVal(WDS_SIZE_006_PX);
export const WDS_SIZE_007_PX_UNITLESS = remToPxVal(WDS_SIZE_007_PX);
export const WDS_SIZE_008_PX_UNITLESS = remToPxVal(WDS_SIZE_008_PX);
export const WDS_SIZE_010_PX_UNITLESS = remToPxVal(WDS_SIZE_010_PX);
export const WDS_SIZE_012_PX_UNITLESS = remToPxVal(WDS_SIZE_012_PX);
export const WDS_SIZE_014_PX_UNITLESS = remToPxVal(WDS_SIZE_014_PX);
export const WDS_SIZE_016_PX_UNITLESS = remToPxVal(WDS_SIZE_016_PX);
export const WDS_SIZE_018_PX_UNITLESS = remToPxVal(WDS_SIZE_018_PX);
export const WDS_SIZE_020_PX_UNITLESS = remToPxVal(WDS_SIZE_020_PX);
export const WDS_SIZE_022_PX_UNITLESS = remToPxVal(WDS_SIZE_022_PX);
export const WDS_SIZE_024_PX_UNITLESS = remToPxVal(WDS_SIZE_024_PX);
export const WDS_SIZE_028_PX_UNITLESS = remToPxVal(WDS_SIZE_028_PX);
export const WDS_SIZE_032_PX_UNITLESS = remToPxVal(WDS_SIZE_032_PX);
export const WDS_SIZE_036_PX_UNITLESS = remToPxVal(WDS_SIZE_036_PX);
export const WDS_SIZE_040_PX_UNITLESS = remToPxVal(WDS_SIZE_040_PX);
export const WDS_SIZE_048_PX_UNITLESS = remToPxVal(WDS_SIZE_048_PX);
export const WDS_SIZE_056_PX_UNITLESS = remToPxVal(WDS_SIZE_056_PX);
export const WDS_SIZE_064_PX_UNITLESS = remToPxVal(WDS_SIZE_064_PX);
export const WDS_SIZE_068_PX_UNITLESS = remToPxVal(WDS_SIZE_068_PX);
export const WDS_SIZE_075_PX_UNITLESS = remToPxVal(WDS_SIZE_075_PX);
export const WDS_SIZE_080_PX_UNITLESS = remToPxVal(WDS_SIZE_080_PX);
export const WDS_SIZE_088_PX_UNITLESS = remToPxVal(WDS_SIZE_088_PX);
export const WDS_SIZE_092_PX_UNITLESS = remToPxVal(WDS_SIZE_092_PX);
export const WDS_SIZE_096_PX_UNITLESS = remToPxVal(WDS_SIZE_096_PX);
export const WDS_SIZE_104_PX_UNITLESS = remToPxVal(WDS_SIZE_104_PX);
export const WDS_SIZE_112_PX_UNITLESS = remToPxVal(WDS_SIZE_112_PX);
export const WDS_SIZE_128_PX_UNITLESS = remToPxVal(WDS_SIZE_128_PX);
export const WDS_SIZE_160_PX_UNITLESS = remToPxVal(WDS_SIZE_160_PX);
export const WDS_SIZE_176_PX_UNITLESS = remToPxVal(WDS_SIZE_176_PX);
export const WDS_SIZE_192_PX_UNITLESS = remToPxVal(WDS_SIZE_192_PX);
export const WDS_SIZE_256_PX_UNITLESS = remToPxVal(WDS_SIZE_256_PX);
export const WDS_SIZE_300_PX_UNITLESS = remToPxVal(WDS_SIZE_300_PX);
export const WDS_SIZE_416_PX_UNITLESS = remToPxVal(WDS_SIZE_416_PX);
export const WDS_SIZE_520_PX_UNITLESS = remToPxVal(WDS_SIZE_520_PX);
export const WDS_SIZE_650_PX_UNITLESS = remToPxVal(WDS_SIZE_650_PX);

export const PIXEL_BREAKPOINT_VALUES: Dictionary<number> = {
  MOBILE: remToPxVal(WDS_BREAKPOINT_MOBILE),
  MOBILE_UP_TO: remToPxVal(WDS_BREAKPOINT_MOBILE_UP_TO),
  TABLET: remToPxVal(WDS_BREAKPOINT_TABLET),
  TABLET_UP_TO: remToPxVal(WDS_BREAKPOINT_TABLET_UP_TO),
  DESKTOP_S: remToPxVal(WDS_BREAKPOINT_DESKTOP_S),
  DESKTOP_S_UP_TO: remToPxVal(WDS_BREAKPOINT_DESKTOP_S_UP_TO),
  DESKTOP_M: remToPxVal(WDS_BREAKPOINT_DESKTOP_M),
  DESKTOP_M_UP_TO: remToPxVal(WDS_BREAKPOINT_DESKTOP_M_UP_TO),
  DESKTOP_L: remToPxVal(WDS_BREAKPOINT_DESKTOP_L),
  HEIGHT_TABLET_UP_TO: remToPxVal(WDS_BREAKPOINT_HEIGHT_TABLET_UP_TO),
};

export const BREAKPOINTS: Dictionary<string> = {
  MOBILE_UP_TO: `screen and (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO})`, // < 640px
  TABLET: `screen and (min-width: ${WDS_BREAKPOINT_TABLET})`, // > 640px
  TABLET_UP_TO: `screen and (max-width: ${WDS_BREAKPOINT_TABLET_UP_TO})`, // < 1023px
  DESKTOP_S: `screen and (min-width: ${WDS_BREAKPOINT_DESKTOP_S})`, // > 1024px
  DESKTOP_S_LARGE: `screen and (min-width: ${WDS_BREAKPOINT_DESKTOP_LARGE})`, // > 1200px
  DESKTOP_M: `screen and (min-width: ${WDS_BREAKPOINT_DESKTOP_M})`, // > 1440px+
  HEIGHT_TABLET_UP_TO: `screen and (max-height: ${WDS_BREAKPOINT_HEIGHT_TABLET_UP_TO})`, // < 880px
};
