import { Drugs } from "@/types/drug.types";
import { DrugsIdentify } from "@/types/drugsIdentify.types";
import { concat, reduce } from "lodash-es";
import { ChangeEvent, useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { toDrugsIdentifyAppend } from "src/utils/mappers";

export const useDrugIdentifier = (
  data: DrugsIdentify,
  closeDialog: () => void
) => {
  const [drugList, setDrugList] = useState([...data?.drugs]);
  const { watch } = useFormContext();

  const { control } = useFormContext();
  const { replace } = useFieldArray({
    control,
    name: "drug",
  });
  const watchedFields: Drugs[] = watch("drug");

  const save = useCallback(() => {
    //  Filter the watchedFields to include only those with a valid name value.
    const filteredWatchedDrugs = watchedFields.filter(
      (item) => item?.name?.value
    );

    // Combine the valid watched fields with the existing drugs data.
    const combinedDrugList = concat(filteredWatchedDrugs, drugList);

    // Aggregate the drug list by summing amounts for drugs with the same name
    const aggregatedDrugList = reduce(
      combinedDrugList,
      (accumulatedList: Drugs[], currentDrug) => {
        const matchingDrug = accumulatedList.find(
          (drug) => drug.name.value === currentDrug.name.value
        );
        if (matchingDrug) {
          matchingDrug.amount += currentDrug.amount;
        } else {
          accumulatedList.push(currentDrug);
        }
        return accumulatedList;
      },
      []
    );

    // Transform the aggregated list to the required format for saving
    const formattedDrugList = toDrugsIdentifyAppend(aggregatedDrugList);

    // Update the state with the newly formatted drug list and close Dialog
    replace(formattedDrugList);
    closeDialog();
  }, [closeDialog, drugList, replace, watchedFields]);

  const modifyDrugField = (
    index: number,
    field: keyof Drugs,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    setDrugList((prevDrugList) => {
      const updatedDrug = { ...prevDrugList[index] };

      if (field === "name") {
        updatedDrug.name = {
          ...updatedDrug.name,
          value: value as string,
          label: value as string,
          // atc: updatedDrug.atc,
        };
      } else {
        updatedDrug[field] = value as never;
      }

      // Return the new state array with the updated drug object
      return prevDrugList.map((drug, i) => (i === index ? updatedDrug : drug));
    });
  };

  return { drugList, save, modifyDrugField };
};
