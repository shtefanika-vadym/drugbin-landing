import { createContext } from "react";

export const DrugIdentifierContext = createContext<{
  identifiedDrugs: any;
}>({
  identifiedDrugs: undefined,
});
