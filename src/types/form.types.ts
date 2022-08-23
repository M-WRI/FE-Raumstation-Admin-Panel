export interface IFromProps {
  children: JSX.Element | JSX.Element[];
}

export type TFormType =
  | "text"
  | "radio"
  | "checkbox"
  | "submit"
  | "button"
  | "email"
  | "password";

export interface IFormItem {
  type: TFormType;
  name: string;
  title: string;
}
