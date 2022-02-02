import { IGetUserAddressResponse } from "./get-user-address-response.types";

type GetUserAddress = (cepCode: string) => Promise<IGetUserAddressResponse>

export interface IUseAddressService {
  getUserAddress: GetUserAddress
}
