import { useMemo } from "react";
import axios, { AxiosInstance } from "axios";

interface IUseAxios {
  createInstance: (baseUrl?: string) => AxiosInstance,
}

export default function useAxios(): IUseAxios {

  function createInstance(baseURL = '') {
    return axios.create({
      baseURL,
    });
  }

  return useMemo(() => ({
    createInstance,
  }), [axios]);
}
