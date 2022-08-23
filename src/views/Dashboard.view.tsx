import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
// PATHS
import { ROUTEPATHS } from "../routes/routePaths";
// COMPONENTS
import { RootState } from "../store/store";
import { Headline } from "../components/Headline.component";
import { UserProfileCard } from "../components/UserProfileCard";
import { CompanyProfileCard } from "../components/CompanyProfileCard";
import { Button } from "../components/Button.component";
// STYLES
import styles from "../styles/Dashboard.module.scss";

export const Dashboard = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const company = useSelector((state: RootState) => state.company);

  const navigate = useNavigate();

  const navigateToEditProfile = () => {
    navigate(ROUTEPATHS.dashboard.editProfile);
  };

  return (
    <>
      <Outlet />
      <div className={styles.container}>
        <div className={styles.head}>
          <Headline type="h1">{`Hi, ${user.firstName}`}</Headline>
          <Button
            cta={navigateToEditProfile}
            type="L"
            text="Edit Profile"
            signal
          />
        </div>
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
    </>
  );
};
