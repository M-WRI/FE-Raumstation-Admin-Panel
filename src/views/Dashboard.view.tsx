import { useSelector } from "react-redux";
// COMPONENTS
import { RootState } from "../store/store";
import { Headline } from "../components/Headline.component";
import { UserProfileCard } from "../components/UserProfileCard";
import { CompanyProfileCard } from "../components/CompanyProfileCard";
// STYLES
import styles from "../styles/Dashboard.module.scss";

export const Dashboard = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const company = useSelector((state: RootState) => state.company);

  return (
    <div className={styles.container}>
      <Headline type="h1">{`Hi, ${user.firstName}`}</Headline>
      <div className={styles.userInformationContainer}>
        <UserProfileCard
          name={`${user.firstName} ${user.lastName}`}
          email={user.email}
          position={user.position}
        />
        <CompanyProfileCard
          companyName={company.companyName}
          description={company.description}
          industry={company.industry}
        />
      </div>
    </div>
  );
};
