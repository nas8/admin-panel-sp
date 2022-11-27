import { useEffect } from 'react';
import { PostList } from '../../components/PostList/PostList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.css';

export const Posts: React.FC = () => {
  const { posts, loading, page, numberOfPosts } = useTypedSelector((state) => state.post);
  const { fetchPosts, setPostsPage } = useActions();

  console.log(page);

  useEffect(() => {
    if (!loading) {
      fetchPosts(page);
    }
  }, [page]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.addEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = (e: any) => {
    let scrollHeight = e.target.documentElement.scrollHeight;
    let scrollTop = e.target.documentElement.scrollTop;
    let innerHeight = window.innerHeight;
    let difference = scrollHeight - (scrollTop + innerHeight);

    if (difference < 100 && !loading && posts.length < numberOfPosts) {
      setPostsPage(page + 1);
    }
  };

  return (
    <div className={styles.root}>
      <PostList posts={posts} />
      {!loading && posts.length === numberOfPosts && <h4>Больше грузить нечего!</h4>}
    </div>
  );
};
