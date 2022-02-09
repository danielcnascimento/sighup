import { ReactNode } from "react";

export interface IButton {
  text: string,
  icon?: ReactNode,
  onClick?: () => void,
  isDisable?: boolean,
}
