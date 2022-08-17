// Components
import { Headline } from "./Headline.component";
import { Text } from "./Text.component";
import { EditAndDeleteBtn } from "./EditAndDeleteBtn.component";
// UTILS
import { textFormater } from "../utils/textFormater";
// TYPES
import { IBlockPostCardProps } from "../types/blogPost.types";
// STYLES
import styles from "../styles/BlogPostCard.module.scss";

export const BlockPostCard = ({
  title,
  subHead,
}: IBlockPostCardProps): JSX.Element => {
  const isTextLong = textFormater(subHead);

  return (
    <div className={styles.container}>
      <Headline type="h2">{title}</Headline>
      <div className={styles.seperator} />
      {isTextLong && <Text>{isTextLong}</Text>}
      <div className={styles.btnContainer}>
        <EditAndDeleteBtn type="edit" />
        <EditAndDeleteBtn type="delete" />
      </div>
    </div>
  );
};
