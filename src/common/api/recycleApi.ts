import { createApi } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/src/query/baseQueryTypes'
import type { EndpointBuilder } from '@reduxjs/toolkit/src/query/endpointDefinitions'

import { HTTP_METHODS } from 'common/constants/httpMethodsConstants'
import { baseQuery } from 'common/utils/fetchBaseQuery'

export const recycleApi = createApi({
  reducerPath: 'recycle',
  baseQuery: baseQuery(),
  endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
    recycleDrug: build.mutation({
      query: (product) => ({
        url: '/recycle',
        data: product,
        method: HTTP_METHODS.POST,
      }),
    }),
    drugsIdentify: build.mutation({
      query: (image) => ({
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url: '/drugs/identify',
        data: image,
        method: HTTP_METHODS.POST,
      }),
    }),
    hospitalsDetails: build.query({
      query: () => ({
        url: `/hospitals`,
      }),
    }),
    documnet: build.query({
      query: (id) => ({
        headers: {
          Accept: 'application/pdf',
        },
        responseType: 'arraybuffer',
        url: `/recycle/process/${id}`,
      }),
    }),
  }),
})

export const { useRecycleDrugMutation, useDrugsIdentifyMutation, useHospitalsDetailsQuery, useDocumnetQuery }: any =
  recycleApi
