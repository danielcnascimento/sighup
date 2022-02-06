import { IDefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from "react-hooks-helper";
import { IGetUserAddressResponse } from "@services/address/types/get-user-address-response.types";

export interface IAddressSectionProps {
  formData: IDefaultFormData;
  setForm: SetForm;
  addressInfo: IGetUserAddressResponse
}
