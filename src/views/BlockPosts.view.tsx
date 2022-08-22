// DATA
import data from "../api/mocks/blockPosts.json";
// COMPONENTS
import { BlockPostCard } from "../components/BlogPostCard.component";
import { Button } from "../components/Button.component";
// STYLES
import styles from "../styles/BlogPosts.module.scss";

export const BlockPosts = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Button type="L" text="Create New Post" signal />

      <div className={styles.blogListContainer}>
        {data.map((blockPost) => (
          <BlockPostCard key={blockPost.id} {...blockPost} />
        ))}
      </div>
    </div>
  );
};
