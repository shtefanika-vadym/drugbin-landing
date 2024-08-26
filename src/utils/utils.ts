import { reduce, size, slice, split, toString } from "lodash-es";

export function getStringWidth(text: string, font = "16px Arial") {
  // Create a canvas element
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (context) {
    // Check if context is not null
    // Set the font for the context
    context.font = font;

    // Measure the text width
    const metrics = context.measureText(text);

    return metrics.width;
  }

  // Handle the case where context is null (though this should not typically happen)
  console.warn("Unable to get 2D context from canvas");
  return 0;
}

export const fromPackagingType = (pack: string): string => {
  const packMapping: { [key: string]: string } = {
    box: "Cutie",
    entity: "Unitate",
  };

  return packMapping[pack] || "Unitate";
};

export const toPackagingType = (pack: string): string => {
  const packMapping: { [key: string]: string } = {
    Cutie: "box",
    Unitate: "entity",
  };

  return packMapping[pack] || "entity";
};

export const isValidCNP = (value: string): boolean => {
  const cnp = toString(value);

  if (size(cnp) !== 13) return false;

  const controlConstant = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];

  const sum = reduce(
    slice(split(cnp, ""), 0, 12),
    (acc, digit, index) => acc + Number(digit) * controlConstant[index],
    0
  );

  const remainder = sum % 11;
  const calculatedControlDigit = remainder < 10 ? remainder : 1;
  const providedControlDigit = Number(cnp[12]);

  return calculatedControlDigit === providedControlDigit;
};
