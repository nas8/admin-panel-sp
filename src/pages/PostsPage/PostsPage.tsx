import { useEffect } from 'react';
import { PostList } from '../../components/PostList/PostList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.css';

export const Posts: React.FC = () => {
  const { posts, loading, page } = useTypedSelector((state) => state.post);
  const { fetchPosts, setPostsPage } = useActions();

  useEffect(() => {
    if (!loading) {
      fetchPosts(page);
    }
  }, [page]);

  return (
    <div className={styles.root}>
      <PostList posts={posts} />
      {loading || <button onClick={() => setPostsPage(page + 1)}>Load More</button>}
    </div>
  );
};

// useEffect(() => {
//   document.addEventListener('scroll', scrollHandler);

//   return function () {
//     document.addEventListener('scroll', scrollHandler);
//   };
// });

// const scrollHandler = (e: any) => {
//   let scrollHeight = e.target.documentElement.scrollHeight;
//   let scrollTop = e.target.documentElement.scrollTop;
//   let innerHeight = window.innerHeight;

//   if (scrollHeight - (scrollTop + innerHeight) < 200) {
//     setPostsPage(page + 1);
//   }
// };
