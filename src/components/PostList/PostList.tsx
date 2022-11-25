import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Post, Posts } from '../../types/posts';
import { PostItem } from '../PostItem/PostItem';
import styles from './styles.module.css';

export const PostList: React.FC<Posts> = ({ posts }) => {
  const { loading, error } = useTypedSelector((state) => state.post);

  return (
    <div className={styles.root}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}
    </div>
  );
};
