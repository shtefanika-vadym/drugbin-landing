export interface DrugsIdentifyResponse {
  result: DrugsIdentifyListResponse[];
}

export interface DrugsIdentifyListResponse {
  name: string;
  count: number;
  package: string | null;
  concentration: string | null;
  atc: string | null;
  prescription: string | null;
}

export interface DrugsIdentifyList {
  name: {
    id: null;
    isPsycholeptic: boolean;
    label: string;
    value: string;
    atc: string | null;
    prescription: string | null;
    concentration: string | null;
  };
  amount: number;
  pack: string | null;
  atc: string | null;
}

export interface DrugsIdentify {
  count: number;
  drugs: DrugsIdentifyList[];
}
