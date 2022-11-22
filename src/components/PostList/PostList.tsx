import { Posts } from '../../types/posts';
import { PostItem } from '../PostItem/PostItem';
import styles from './styles.module.css';

export const PostList: React.FC<Posts> = ({ posts }) => {
  return (
    <div className={styles.root}>
      {posts.map(({ id, title, body }) => (
        <PostItem key={id} id={id} title={title} body={body} />
      ))}
    </div>
  );
};
