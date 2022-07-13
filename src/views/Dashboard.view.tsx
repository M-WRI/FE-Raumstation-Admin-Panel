import { useSelector } from "react-redux";
// COMPONENTS
import { RootState } from "../store/store";
import { Card } from "../components/Card.component";
import { Headline } from "../components/Headline.component";
import { Text } from "../components/Text.component";
import { ProfileImage } from "../components/ProfileImage.component";
// STYLES
import styles from "../styles/Dashboard.module.scss";

export const Dashboard = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  console.log(user);

  return (
    <div className={styles.container}>
      <Headline type="h1">{`Hi, ${user.firstName}`}</Headline>
      <div className={styles.userInformationContainer}>
        <Card>
          <>
            <Headline type="h3">User:</Headline>
            <ProfileImage type="L" image={user.profileImage} />
            <Text>{`${user.firstName} ${user.lastName}`}</Text>
            <Text>{user.email}</Text>
            <div>
              <Text>Floor: </Text>
              <Text strong>{`${user.floor}`}</Text>
            </div>
            <div>
              <Text>Seat: </Text>
              <Text strong>{`${user.seat}`}</Text>
            </div>
          </>
        </Card>
        <Card>
          <>
            <Headline type="h3">Company:</Headline>
            <ProfileImage type="L" image={user.profileImage} />

            <Text strong>{user.companyDetails.companyName}</Text>
            <Text>{user.companyDetails.description}</Text>
            <div>
              <Text>Industry: </Text>
              <Text strong>{`${user.companyDetails.industry}`}</Text>
            </div>
          </>
        </Card>
      </div>
    </div>
  );
};
