import { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError } from "axios";
import { create } from "apisauce";

const API_URL = process.env.REACT_APP_DRUGBIN_API_BASE_URL;

const axiosInstance = axios.create();
export const api = create({ baseURL: API_URL });

const axiosBaseQuery =
  (): BaseQueryFn =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance.request({
        url: API_URL + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError<FetchBaseQueryError>;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      };
    }
  };

export default axiosBaseQuery;
