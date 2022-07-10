type THeadlineTypes = "h1" | "h2" | "h3";

export interface IHeadlineProps {
  children: JSX.Element | string;
  type: THeadlineTypes;
}
