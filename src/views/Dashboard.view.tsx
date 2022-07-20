import { useSelector } from "react-redux";
// COMPONENTS
import { RootState } from "../store/store";
import { Card } from "../components/Card.component";
import { Headline } from "../components/Headline.component";
import { Text } from "../components/Text.component";
import { ProfileImage } from "../components/ProfileImage.component";
// import { Calendar } from "../components/Calendar.component";
// import { DatePicker } from "../components/DatePicker.component";
// STYLES
import styles from "../styles/Dashboard.module.scss";
import { PositionInfo } from "../components/PositionInfo";

export const Dashboard = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  console.log(user);

  return (
    <div className={styles.container}>
      <Headline type="h1">{`Hi, ${user.firstName}`}</Headline>
      <div className={styles.userInformationContainer}>
        <Card>
          <Headline type="h3">User:</Headline>
          <ProfileImage type="L" image={user.profileImage} />
          <Text>{`${user.firstName} ${user.lastName}`}</Text>
          <Text>{user.email}</Text>
          <PositionInfo>
            <PositionInfo>
              <Text>Floor: </Text>
              <Text strong>{`${user.floor}`}</Text>
            </PositionInfo>
            <PositionInfo>
              <Text>Seat: </Text>
              <Text strong>{`${user.seat}`}</Text>
            </PositionInfo>
          </PositionInfo>
        </Card>
        <Card>
          <Headline type="h3">Company:</Headline>
          <ProfileImage type="L" image={user.profileImage} />
          <Text strong>{user.companyDetails.companyName}</Text>
          <Text>{user.companyDetails.description}</Text>
          <PositionInfo>
            <Text>Industry: </Text>
            <Text strong>{`${user.companyDetails.industry}`}</Text>
          </PositionInfo>
        </Card>
      </div>
      {/* <div>
        <Card>
          <DatePicker />
        </Card>
      </div> */}
    </div>
  );
};
