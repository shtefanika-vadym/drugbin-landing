export interface CenterResponse {
  data: CenterType[];
  limit: number;
  page: number;
  totalItems: number;
}

export interface CenterType {
  fullAddress: string;
  id: number;
  lat: string;
  lng: string;
  name: string;
  regionLongName: string;
  regionShortName: string;
}
