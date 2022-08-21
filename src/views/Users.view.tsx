import { useSelector } from "react-redux";
import { RootState } from "../store/store";
// COMPONENTS
import { UserListItem } from "../components/UserListItem.component";
// STYLES
import styles from "../styles/Users.module.scss";

export const Users = (): JSX.Element => {
  const userList = useSelector((state: RootState) => state.userList);

  return (
    <div className={styles.container}>
      {userList.map((user: any) => (
        <UserListItem key={user.id} {...user} />
      ))}
    </div>
  );
};
