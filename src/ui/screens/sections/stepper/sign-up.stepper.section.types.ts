import {SetForm} from "react-hooks-helper";

export interface  DefaultFormData {
  email: string,
  password: string,
  checkupPassword: string,
}

export interface IShowStepperUI {
  index: number,
  formData: DefaultFormData,
  setForm: SetForm,
  navigation: {
    next: () => void;
  },
}
