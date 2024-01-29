import { PersonalInfo } from '@/types/collect';
import { isEmpty, toString } from 'lodash-es';

const regexPatternCNP = /^\d{13}$/;
const regexPatternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const usePersonalFormValidation = (formValues: PersonalInfo) => {
  const validations = {
    firstName: {
      isValid: !isEmpty(formValues.firstName),
      errorMessage: isEmpty(formValues.firstName) && 'Numele este un câmp obligatoriu.',
      maxLength: 50,
      isRequired: true,
    },

    lastName: {
      isValid: !isEmpty(formValues.lastName),
      errorMessage: isEmpty(formValues.lastName) && 'Prenumele este un câmp obligatoriu.',
      maxLength: 50,
      isRequired: true,
    },

    email: {
      isValid: regexPatternEmail.test(formValues.email) && !isEmpty(formValues.email),
      errorMessage: 'Te rugăm să introduci o adresă de email validă',
      maxLength: 255,
      isRequired: false,
    },

    cnp: {
      isValid: regexPatternCNP.test(toString(formValues.cnp)) && !isEmpty(formValues.cnp),
      errorMessage: 'Te rugăm să introduci un CNP valid.',
      maxLength: 255,
      isRequired: true,
    },

    address: {
      isValid: !isEmpty(formValues.address),
      errorMessage: isEmpty(formValues.address) && 'Te rugăm să introduci o adresă validă.',
      maxLength: 255,
      isRequired: true,
    },
  };

  return validations;
}