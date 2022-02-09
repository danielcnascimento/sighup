import { useMemo } from "react";
import { IUseAddressService } from "./types/use-address-service.types";
import { IGetUserAddressResponse } from "./types/get-user-address-response.types";
import useAxios from "../use-axios";

export function useAddressService(): IUseAddressService {
  const axios = useAxios().createInstance();

  /* Busca Endereço do usuário.
  * referencia DOC: https://apicep.com/api-de-consulta/
  * */
  async function getUserAddress(cepCode:string): Promise<IGetUserAddressResponse> {
    try {
      const response = await axios
        .get(`https://ws.apicep.com/cep/${cepCode}.json`)

      return response
    } catch (error: any){
      throw error.response;
    }
  }

  return useMemo(() => ({
    getUserAddress,
  }), [
    getUserAddress
  ])
}
