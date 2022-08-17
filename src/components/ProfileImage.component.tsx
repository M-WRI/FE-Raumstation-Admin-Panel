import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
// COMPONENTS
import { Headline } from "./Headline.component";
// TYPES
import { IProfileImageProps } from "../types/ProfileImage.types";
// STYLES
import styles from "../styles/ProfileImage.module.scss";

export const ProfileImage = ({ image = "", type }: IProfileImageProps) => {
  const user = useSelector((state: RootState) => state.user);

  const typeSwitch = (type: string) => {
    switch (type) {
      case "S":
        return styles.small;
      case "M":
        return styles.medium;
      case "L":
        return styles.large;
    }
  };

  return (
    <div className={`${styles.profileImageContainer} ${typeSwitch(type)}`}>
      {image ? (
        <img src={image} alt={user.firstName} />
      ) : (
        <Headline type="h2">
          {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
        </Headline>
      )}
    </div>
  );
};
