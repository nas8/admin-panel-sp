import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Posts } from '../../types/posts';
import { PostItem } from '../PostItem/PostItem';
import styles from './styles.module.css';

export const PostList: React.FC<Posts> = ({ posts }) => {
  const { loading, error } = useTypedSelector((state) => state.post);

  return (
    <div className={styles.root}>
      {posts.map(({ id, title, body }) => (
        <PostItem key={id} id={id} title={title} body={body} />
      ))}

      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}
    </div>
  );
};
