import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import getCookie from "@/libs/cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config };
    let accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");

    if (accessToken) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
      return newConfig;
    }

    if (refreshToken) {
      try {
        const res = await fetch("/api/auth/refresh-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        });

        if (res.status === 200) {
          accessToken = getCookie("accessToken");
          newConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;

type AxiosRequester = <T, U = T>(
  options: AxiosRequestConfig<T>,
) => Promise<AxiosResponse<U>>;

export const axiosRequester: AxiosRequester = async (options) => {
  const result = await axiosInstance({ ...options });
  return result;
};
