export interface DrugsIdentifyResponse {
  result: DrugsIdentifyListResponse[];
}

export interface DrugsIdentifyListResponse {
  name: string;
  count: number;
  package: string | null;
  concentration: string | null;
  atc: string | null;
}

export interface DrugsIdentifyList {
  name: {
    id: null;
    isPsycholeptic: boolean;
    label: string;
    value: string;
  };
  amount: number;
  pack: string | null;
  concentration: string | null;
  atc: string | null;
}

export interface DrugsIdentify {
  count: number;
  drugs: DrugsIdentifyList[];
}
