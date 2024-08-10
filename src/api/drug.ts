import { SearchDrugResponse } from "@/types/drug.types";
import { DrugsIdentifyResponse } from "@/types/drugsIdentify.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/src/query/baseQueryTypes";
import type { EndpointBuilder } from "@reduxjs/toolkit/src/query/endpointDefinitions";
import { toDrugSearch, toDrugsIdentify } from "src/utils/mappers";
import { api, baseQuery } from ".";
import { orderBy } from "lodash-es";

export const drugApi = createApi({
  reducerPath: "drug",
  baseQuery: baseQuery(),
  endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
    drug: build.query({
      query: ({ query, limit }) => ({
        url: `/drugs/search/?${query && `name=${query}&`}limit=10000`,
      }),
      transformResponse: (respons: SearchDrugResponse[]) => {
        return toDrugSearch(respons);
      },
    }),
    centerDetails: build.query({
      query: () => ({
        url: `/hospitals?page=1&limit=10`,
      }),
    }),
    closestCenterDetails: build.query({
      query: ({ latitude, longitude }) => ({
        url: `/hospitals/location?lat=${latitude}&lng=${longitude}`,
      }),
    }),
    countiesCenterDetails: build.query({
      query: (city) => ({
        url: `/hospitals?county=${city}&page=1&limit=20`,
      }),
    }),
    cities: build.query({
      query: () => ({
        url: `/hospitals/counties`,
      }),
      transformResponse: (respons: string[]) => {
        return orderBy(respons, [], ["asc"]);
      },
    }),
    recycleDrug: build.mutation({
      query: (product) => ({
        url: "/recycle",
        data: product,
        method: "post",
      }),
      transformResponse: (response: { recycleId: string }) => {
        return `/success/collect/${response.recycleId}`;
      },
    }),
    documnet: build.query({
      query: ({ id, type }) => ({
        headers: {
          Accept: "application/pdf",
        },
        responseType: "arraybuffer",
        url: `/recycle/process/${id}?type=${type}`,
      }),
      transformResponse: (respons: any) => {
        const pdfBlob = new Blob([respons], { type: "application/pdf" });
        return URL.createObjectURL(pdfBlob);
      },
    }),
    contact: build.mutation({
      query: (messagess) => ({
        url: `/contact-us`,
        data: messagess,
        method: "post",
      }),
    }),
    drugsIdentify: build.mutation({
      query: (image) => ({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        url: "/drugs/identify",
        data: image,
        method: "post",
      }),
      transformResponse: (respons: DrugsIdentifyResponse) => {
        return toDrugsIdentify(respons);
      },
    }),
  }),
});

export const getDrugsRequest = (query: string, limit: number) =>
  api.get(`/drugs/search`, {
    ...(query && { name: query }),
    limit,
  });

export const {
  useDrugQuery,
  useCenterDetailsQuery,
  useClosestCenterDetailsQuery,
  useCountiesCenterDetailsQuery,
  useCitiesQuery,
  useRecycleDrugMutation,
  useDocumnetQuery,
  useContactMutation,
  useDrugsIdentifyMutation,
} = drugApi;
