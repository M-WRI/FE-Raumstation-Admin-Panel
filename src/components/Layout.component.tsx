// import styles from "../styles/Layout.module.scss";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return <div>{children}</div>;
};
