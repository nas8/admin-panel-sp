import { PostItem } from '../PostItem/PostItem';
import styles from './styles.module.css';

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

interface ComponentProps {
  posts: Post[];
}

export const PostList = ({ posts }: ComponentProps) => {
  return (
    <div className={styles.root}>
      {posts.map(({ id, title, body }) => (
        <PostItem key={id} id={id} title={title} body={body} />
      ))}
    </div>
  );
};
