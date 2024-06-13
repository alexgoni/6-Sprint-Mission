import { useState } from "react";
import { AxiosRequestConfig } from "axios";
import axiosRequester from "api/axios";

export default function useAxiosFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const axiosFetch = async (options: AxiosRequestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosRequester({ ...options });

      return response;
    } catch (err: any) {
      setError(err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, axiosFetch };
}
