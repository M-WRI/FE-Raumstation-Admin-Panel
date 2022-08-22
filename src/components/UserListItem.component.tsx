// COMPONENTS
import { Card } from "./Card.component";
// STYLES
import styles from "../styles/UserListItem.module.scss";
import { EditAndDeleteBtn } from "./EditAndDeleteBtn.component";
import { ProfileImage } from "./ProfileImage.component";

export const UserListItem = ({ ...user }): JSX.Element => {
  return (
    <Card>
      <div className={styles.container}>
        <div>
          <ProfileImage type="M" image={user.profileImage} />
        </div>
        <div className={styles.name}>
          <span>
            <strong>{`${user.firstName} ${user.lastName}`}</strong>
          </span>
        </div>
        <div className={styles.email}>
          <span>{user.email}</span>
        </div>
        <div className={styles.position}>
          <span>{`${user.position.floor}OG / ${user.position.seat}`}</span>
        </div>
        <div className={styles.role}>
          <span>
            {user.role === "admin" ? <strong>{user.role}</strong> : user.role}
          </span>
        </div>
        <EditAndDeleteBtn type="delete" />
      </div>
    </Card>
  );
};
