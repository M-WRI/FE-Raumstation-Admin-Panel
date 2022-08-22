import { useSelector } from "react-redux";
import { RootState } from "../store/store";
// COMPONENTS
import { UserListItem } from "../components/UserListItem.component";
import { Button } from "../components/Button.component";
// STYLES
import styles from "../styles/Users.module.scss";

export const Users = (): JSX.Element => {
  const userList = useSelector((state: RootState) => state.userList);

  return (
    <div className={styles.container}>
      <Button type="L" text="Create New User" signal />
      <div className={styles.userListContainer}>
        {userList.map((user: any) => (
          <UserListItem key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};
