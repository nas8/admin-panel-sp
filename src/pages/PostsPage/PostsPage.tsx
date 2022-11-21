import { useEffect } from 'react';
import { PostList } from '../../components/PostList/PostList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.css';

export const Posts: React.FC = () => {
  const { posts, error, loading } = useTypedSelector((state) => state.post);
  const { fetchPosts } = useActions();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(posts);

  return (
    <div className={styles.root}>
      <PostList posts={posts} />
    </div>
  );
};
