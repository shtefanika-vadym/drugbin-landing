import { last } from "lodash-es";
import * as Yup from "yup";
import { isValidCNP } from "./utils";

export const drugSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Cantitatea este un câmp obligatoriu.")
    .min(1, "Cantitatea trebuie să fie mai mare de 0."),
  pack: Yup.string().required("Tipul de ambalaj este un câmp obligatoriu."),
  name: Yup.object().shape({
    value: Yup.string().required("Numele este un câmp obligatoriu."),
    id: Yup.number().notRequired(),
    isPsycholeptic: Yup.boolean().notRequired(),
    label: Yup.string().notRequired(),
    atc: Yup.string().notRequired(),
    prescription: Yup.string().notRequired(),
    concentration: Yup.string().notRequired(),
  }),
});

// TODO: find a better way
export const drugValidationSchema = Yup.object({
  drug: Yup.array()
    .of(drugSchema)
    .min(1, "At least one drug must be provided")
    .test("unique-name-value", function (drugs) {
      if (!drugs) return true;

      // Create a map to track all occurrences of each name
      const nameToIndices = new Map<string, number[]>();

      drugs.forEach((drug, index) => {
        const nameValue = drug?.name?.value;
        if (nameValue) {
          if (!nameToIndices.has(nameValue)) {
            nameToIndices.set(nameValue, []);
          }
          nameToIndices.get(nameValue)!.push(index);
        }
      });

      // Find the last index of duplicates
      let lastDuplicateIndex = -1;
      nameToIndices.forEach((indices) => {
        if (indices.length > 1) {
          lastDuplicateIndex = last(indices)!; // Get the last occurrence
        }
      });

      // If there are duplicates, return an error for the last occurrence
      if (lastDuplicateIndex !== -1) {
        return this.createError({
          path: `drug[${lastDuplicateIndex}].name.value`,
          message: "Numele medicamentelor trebuie să fie unice.",
        });
      }

      // No duplicates found, return true
      return true;
    }),
});

// DETAILS
const detailsValidation = (isExtendedDetailsForm: boolean) =>
  Yup.object().shape({
    details: buildDetailsValidation(isExtendedDetailsForm),
  });

const buildDetailsValidation = (isExtendedDetailsForm: boolean) =>
  Yup.object().shape({
    name: Yup.string().required("Numele este un câmp obligatoriu."),
    surname: Yup.string().required("Prenumele este un câmp obligatoriu."),
    cnp: isExtendedDetailsForm
      ? Yup.string()
          .required("CNP-ul este un câmp obligatoriu.")
          .test("is-valid-cnp", "CNP-ul nu este valid.", isValidCNP)
      : Yup.string().notRequired(),
    address: isExtendedDetailsForm
      ? Yup.string().required("Adresa este un câmp obligatoriu.")
      : Yup.string().notRequired(),
  });

// CENTER
const centerValidation = Yup.object({
  center: Yup.object({
    centerID: Yup.number().required("Centru este un câmp obligatoriu."),
  }),
});

// COLLECT
export const getValidationSchema = (
  step: number,
  isExtendedDetailsForm: boolean
) => {
  switch (step) {
    case 0:
      return drugValidationSchema;
    case 1:
      return detailsValidation(isExtendedDetailsForm);
    case 2:
      return centerValidation;
    default:
      return Yup.object();
  }
};
