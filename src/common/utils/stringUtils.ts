import { size, toString } from "lodash-es"

export const isEmail = (value: string): boolean =>
  /^[^\W]+[^\s@]*[^\W]+@[^\W]+[^\s@]*\.[^\W]+$/.test(value)

export const isStringNotEmpty = (value: string): boolean => !!value

export const isCNP = (value: number): boolean => size(toString(value)) === 13
