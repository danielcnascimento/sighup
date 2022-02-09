import { ReactNode } from "react";

export type modalContentBox = {
  title: string,
  text: string,
  icon: ReactNode,
}

export interface IModalsProps {
  isOpen: boolean;
  onClose?: () => void;
  modalTitle?: string;
  modalContent?: modalContentBox[];
}
