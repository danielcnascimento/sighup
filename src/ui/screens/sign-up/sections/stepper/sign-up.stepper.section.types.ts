import { NavigationProps, SetForm } from "react-hooks-helper";
import { IGetUserAddressResponse } from "@services/address/types/get-user-address-response.types";
import {ReactElement} from "react";

export interface IDefaultFormData {
  email: string,
  password: string,
  checkupPassword: string,
  firstname: string,
  lastname: string,
  nickname: string,
  birthdate: Date | null,
  phoneNumber: string,
  cep:string,
  city:string,
  neighborhood:string
}

export interface IShowStepperUI {
  index: number,
  formData: IDefaultFormData,
  setForm: SetForm,
  navigation: NavigationProps,
  addressInfo: IGetUserAddressResponse,
  hasHandleNext: boolean,
  hasHandlePrevious: boolean,
  handleStepperPress: VoidFunction,
}
