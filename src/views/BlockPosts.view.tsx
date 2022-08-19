// DATA
import data from "../api/mocks/blockPosts.json";
import { BlockPostCard } from "../components/BlogPostCard.component";
// STYLES
import styles from "../styles/BlogPosts.module.scss";

export const BlockPosts = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {data.map((blockPost) => (
        <BlockPostCard key={blockPost.id} {...blockPost} />
      ))}
    </div>
  );
};
