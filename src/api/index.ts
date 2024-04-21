import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { create } from "apisauce";

const API_URL = process.env.REACT_APP_DRUGBIN_API_BASE_URL;

export const api = create({ baseURL: API_URL });

export const baseQuery =
  (): BaseQueryFn<
    {
      url: string
      data?: AxiosRequestConfig['data']
      method: AxiosRequestConfig['method']
      headers?: AxiosRequestConfig['headers']
    },
    unknown,
    unknown
  > =>
  async (param) => {
    try {
      const result = await axios({
        ...param,
        baseURL: process.env.REACT_APP_DRUGBIN_API_BASE_URL,
        headers: {
          ...param?.headers,
        },
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      if (err.response?.status === 401) {
        localStorage.clear()
        window.location.assign('/auth/login')
      }
      const errors = err?.response?.data?.['error' as keyof unknown]
      return {
        error: {
          status: err.response?.status,
          data:
            typeof errors === 'object'
              ? Object.values(errors).flat()
              : [err?.response?.data?.['message' as keyof unknown]],
        },
      }
    }
  }


  