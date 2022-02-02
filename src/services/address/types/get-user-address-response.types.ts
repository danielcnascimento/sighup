type UserAddressResponse = {
  city: string,
  district: string,
}

export interface IGetUserAddressResponse {
  data: UserAddressResponse,
}
