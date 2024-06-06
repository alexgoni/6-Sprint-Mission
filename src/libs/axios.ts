import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

type AxiosRequester = <T, U = T>(
  options: AxiosRequestConfig<T>,
) => Promise<AxiosResponse<U>>;

export const axiosRequester: AxiosRequester = async (options) => {
  const result = await axiosInstance({ ...options });
  return result;
};
