import { useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosRequester from "@/apis/axios";

export default function useAxiosFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  const axiosFetch = async <T, U = T>(
    options: AxiosRequestConfig<T>,
  ): Promise<AxiosResponse<U>> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosRequester<T, U>({ ...options });
      return response;
    } catch (err: unknown) {
      setError(err);
      throw new Error("fetch 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, axiosFetch };
}
