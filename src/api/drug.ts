import { SearchDrugResponse } from "@/types/drug.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/src/query/baseQueryTypes";
import type { EndpointBuilder } from "@reduxjs/toolkit/src/query/endpointDefinitions";
import { toDrugSearch } from "src/utils/mappers";
import { api, baseQuery } from ".";

export const drugApi = createApi({
  reducerPath: "drug",
  baseQuery: baseQuery(),
  endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
    drug: build.query({
      query: ({ query, limit }) => ({
        url: `/drugs/search/?${query && `name=${query}&`}limit=${limit}`,
      }),
      transformResponse: (respons: SearchDrugResponse[]) => {
        return toDrugSearch(respons);
      },
    }),
    centerDetails: build.query({
      query: () => ({
        url: `/hospitals`,
      }),
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
  useRecycleDrugMutation,
  useDocumnetQuery,
  useContactMutation,
  useDrugsIdentifyMutation,
} = drugApi;
