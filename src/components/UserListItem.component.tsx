// COMPONENTS
import { Card } from "./Card.component";
// STYLES
import styles from "../styles/UserListItem.module.scss";

export const UserListItem = ({ ...user }): JSX.Element => {
  console.log(user, "<----");
  return (
    <Card>
      <h3>{`${user.firstName} ${user.lastName}`}</h3>
    </Card>
  );
};
