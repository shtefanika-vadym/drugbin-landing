import { Dictionary } from "@/types/utils.types";
import {
  WDS_TEXT_FAMILY_BASE,
  WDS_TEXT_WEIGHT_BOLD,
  WDS_TEXT_WEIGHT_REGULAR,
} from "../tokens";

export const TEXT_VARIANT_NAMES = [
  "bodyInfo",
  "bodyXS",
  "bodyS",
  "bodyM",
  "bodyL",
  "titleXS",
  "titleS",
  "titleM",
  "titleL",
  "titleXL",
  "headlineS",
  "headlineM",
  "headlineL",
  "inputLabel",
  "inputPlaceholder100",
] as const;

export type TextVariantType = (typeof TEXT_VARIANT_NAMES)[number];

export interface TextVariant {
  family: string;
  weight: number | string;
  textTransform: "none" | "uppercase";
  style: "normal" | "italic";
  size: number | string;
  lineHeight: number | string;
  letterSpacing: "normal" | string;
}

export const TEXT_VARIANTS: Dictionary<TextVariant> = {
  titleXL: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "48px",
    lineHeight: "64px",
    weight: WDS_TEXT_WEIGHT_BOLD,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  titleL: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "40px",
    lineHeight: "48px",
    weight: WDS_TEXT_WEIGHT_BOLD,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  titleM: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "32px",
    lineHeight: "40px",
    weight: WDS_TEXT_WEIGHT_BOLD,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  titleS: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "24px",
    lineHeight: "32px",
    weight: WDS_TEXT_WEIGHT_BOLD,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  titleXS: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "15px",
    lineHeight: "24px",
    weight: WDS_TEXT_WEIGHT_BOLD,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  bodyInfo: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "12px",
    lineHeight: "16px",
    weight: WDS_TEXT_WEIGHT_REGULAR,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  bodyXS: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "14px",
    lineHeight: "22px",
    weight: WDS_TEXT_WEIGHT_REGULAR,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  bodyS: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "16px",
    lineHeight: "20px",
    weight: WDS_TEXT_WEIGHT_REGULAR,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  bodyM: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "18px",
    lineHeight: "20px",
    weight: WDS_TEXT_WEIGHT_REGULAR,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  inputLabel: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "13px",
    lineHeight: "18px",
    weight: WDS_TEXT_WEIGHT_REGULAR,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
  inputPlaceholder100: {
    family: WDS_TEXT_FAMILY_BASE,
    size: "13px",
    lineHeight: "18px",
    weight: WDS_TEXT_WEIGHT_REGULAR,
    letterSpacing: "normal",
    textTransform: "none",
    style: "normal",
  },
};

export const textVariant = (variantName: TextVariantType): string => {
  const variant = Object.assign(TEXT_VARIANTS)[variantName];

  return variant
    ? `
      font-family: ${variant.family};
      font-style: ${variant.style};
      font-weight: ${variant.weight};
      font-size: ${variant.size};
      line-height: ${variant.lineHeight};
      text-transform: ${variant.textTransform};
      letter-spacing: ${variant.letterSpacing};
      `
    : `
      /* DEBUG */
      /*font-size:18px;*/
      /*color:red!important;*/
      `;
};
