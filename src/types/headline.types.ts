export interface IHeadlineProps {
  children: JSX.Element | string;
  type: THeadlineTypes;
  center?: boolean;
}

export type THeadlineTypes = "h1" | "h2" | "h3";
