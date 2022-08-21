// COMPONENTS
import { Headline } from "./Headline.component";
import { Card } from "./Card.component";
import { Text } from "./Text.component";
import { ProfileImage } from "./ProfileImage.component";
// TYPES
import { ICompanyCardProps } from "../types/ProfileCards";
// STYLES
import styles from "../styles/CompanyProfileCard.module.scss";

export const CompanyProfileCard = ({
  companyName,
  description,
  industry,
}: ICompanyCardProps) => {
  return (
    <Card>
      <Headline type="h3">Company:</Headline>
      <div className={styles.profileImageWrapper}>
        <ProfileImage type="L" />
      </div>
      <div className={styles.headlineWrapper}>
        <Headline type="h3">{companyName}</Headline>
      </div>
      <div className={styles.informationContainer}>
        <Text>{description}</Text>
        <div className={styles.industryWrapper}>
          <Text>Field:</Text>
          <Text strong>{industry}</Text>
        </div>
      </div>
    </Card>
  );
};
