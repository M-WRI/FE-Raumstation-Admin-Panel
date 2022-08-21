// COMPONENTS
import { Headline } from "./Headline.component";
import { Card } from "./Card.component";
import { Text } from "./Text.component";
import { ProfileImage } from "./ProfileImage.component";
// TYPES
import { IProfileCardProps } from "../types/ProfileCards";
// STYLES
import styles from "../styles/UserProfileCard.module.scss";

export const UserProfileCard = ({
  name,
  email,
  position,
}: IProfileCardProps) => {
  return (
    <Card>
      <Headline type="h3">User:</Headline>
      <div className={styles.profileImageWrapper}>
        <ProfileImage type="L" />
      </div>
      <div className={styles.headlineWrapper}>
        <Headline type="h3">{name}</Headline>
      </div>
      <div>
        <Text>{email}</Text>
        <div className={styles.positionInfoContainer}>
          <div className={styles.positionWrapper}>
            <Text>Floor:</Text>
            <Text strong>{position.floor}</Text>
          </div>
          <div className={styles.positionWrapper}>
            <Text>Seat:</Text>
            <Text strong>{position.seat}</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};
