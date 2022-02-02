import React, { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { NavigationProps, useForm, useStep } from "react-hooks-helper";
import {
  DefaultFormData,
  IShowStepperUI,
} from "../ui/screens/sections/stepper/sign-up.stepper.section.types";
import { IGetUserAddressResponse } from "../services/address/types/get-user-address-response.types";
import { useAddressService } from "../services/address/address.service";

interface StepperFormContextProps {
  stepperProps: IShowStepperUI;
}

const StepperFormContext = createContext<StepperFormContextProps>(
  {} as StepperFormContextProps
);

interface StepperFormProviderProps {
  children: ReactNode,
}

export const StepperFormProvider = ({ children }: StepperFormProviderProps) => {
  const [addressInfo, setAdressInfo] = useState<IGetUserAddressResponse>({
    data: {
      city: "",
      district: "",
    }
  })
  const [formData, setForm] = useForm<DefaultFormData>({
    email: "",
    password: "",
    checkupPassword: "",
    firstname: "",
    lastname: "",
    nickname: "",
    birthdate: null,
    phoneNumber: "",
    cep: "",
    city: "",
    neighborhood: "",
  });

  const { index, navigation } = useStep({
    steps: 3,
    initialStep: 0,
  });

  const addressAPI = useAddressService()

  async function handleAddressInfo(cep: string) {
    const response = await addressAPI.getUserAddress(cep)

    console.log('porra é essa:', addressInfo)
    return setAdressInfo({
      data: {
        city: response.data.city,
        district: response.data.district,
      }
    })
  }

  useEffect(() => {
    const { cep } = formData

    if (cep.length === 8) {
      handleAddressInfo(cep)
    }

    return
  }, [formData])

  const stepperProps = {
    index,
    setForm,
    formData,
    navigation,
    addressInfo,
  };

  return (
    <StepperFormContext.Provider value={{ stepperProps }}>
      {children}
    </StepperFormContext.Provider>
  );
};

export function useStepperForm() {
  return useContext(StepperFormContext);
}
