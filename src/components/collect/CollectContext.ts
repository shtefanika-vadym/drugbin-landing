import { PartialCollectPayload } from "@/types/collect.types";
import { noop } from "lodash-es";
import { createContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { PositionType } from "src/hooks/useCurrentLocation";

interface CollectFormContextType {
  step: number;
  methods: UseFormReturn<PartialCollectPayload>;
  location: PositionType;
  isLocationLoading: boolean;
  hasPsycholepticDrug: boolean;
  drugListForm: any;
  next: () => void;
  back: () => void;
  verifyLocationAccess: () => void;
}

const defaultCollectFormContext: CollectFormContextType = {
  step: 0,
  methods: {} as UseFormReturn<PartialCollectPayload>,
  location: {} as PositionType,
  isLocationLoading: false,
  hasPsycholepticDrug: false,
  drugListForm: [],
  next: noop,
  back: noop,
  verifyLocationAccess: noop,
};

export const CollectContext = createContext<CollectFormContextType>(
  defaultCollectFormContext
);
