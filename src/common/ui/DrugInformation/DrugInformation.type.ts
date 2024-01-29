export interface DrugValue {
   drugName: string
   quantity: number | string
}

export enum DrugFormFieldState {
    pristine = 'pristine',
    touched = 'touched',
    dirty = 'dirty',
 }

export const initialDrugState = {
    drugName: DrugFormFieldState.pristine,
    quantity: DrugFormFieldState.pristine
}
    
export type DrugFormState = Record<keyof DrugValue, DrugFormFieldState>;
  
export const drugFormInitialState: Readonly<DrugFormState> = {
   drugName: DrugFormFieldState.pristine,
   quantity: DrugFormFieldState.pristine,
};