import { DrugProps } from "@/types/collect";
import { gt, isEmpty } from "lodash-es";
import { useCallback } from "react";

export const useDrugFormValidation = (formValues: DrugProps[]) => {

    const getValidationObject = useCallback((index: number) => {
        return {
          drugName: {
            isValid: !isEmpty(formValues[index].drugName.name),
            errorMessage: 'Numele este un câmp obligatoriu.',
            isRequired: true
          },

          quantity: {
            isValid: !gt(formValues[index].quantity, 0),
            errorMessage: 'Cantitatea trebuie să fie mai mare de zero.',
            isRequired: true
          }
        };
      }, [formValues]);

    return {getValidationObject};
}