import { SetForm } from "react-hooks-helper";

export interface  DefaultFormData {
  email: string,
  password: string,
  checkupPassword: string,
  firstname: string,
  lastname: string,
  nickname: string,
  birthdate: Date | null,
  phoneNumber: string,
}

export interface IShowStepperUI {
  index: number,
  formData: DefaultFormData,
  setForm: SetForm,
  navigation: {
    next: () => void;
  },
}
