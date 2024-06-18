import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

type AxiosRequester = <T, U = T>(
  options: AxiosRequestConfig<T>,
) => Promise<AxiosResponse<U>>;

const axiosRequester: AxiosRequester = async (options) => {
  const result = await axiosInstance({ ...options });

  return result;
};

export default axiosRequester;
