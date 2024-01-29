import { PersonalInfo } from "@/types/collect";

export enum FormFieldState {
    pristine = 'pristine',
    touched = 'touched',
    dirty = 'dirty',
  }
    
  export type PersonalFormState = Record<keyof PersonalInfo, FormFieldState>;
  
  export const personalFormInitialState: Readonly<PersonalFormState> = {
    firstName: FormFieldState.pristine,
    lastName: FormFieldState.pristine,
    cnp: FormFieldState.pristine,
    address: FormFieldState.pristine,
    email: FormFieldState.pristine,
  };