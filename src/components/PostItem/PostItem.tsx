import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostComments } from '../PostComments/PostComments';
import styles from './styles.module.css';

type PostItem = {
  title: string;
  body: string;
  id: number;
};

export const PostItem: React.FC<PostItem> = ({ id, title, body }) => {
  const { comments, error, loading } = useTypedSelector((state) => state.comment);
  const { fetchComments } = useActions();

  useEffect(() => {
    fetchComments(id);
  }, []);

  if (loading) {
    return <h4>Идет загрузка...</h4>;
  }
  if (error) {
    return <h4>{error}</h4>;
  }

  // console.log(comments);

  return (
    <div className={styles.root}>
      <h4>
        {id}. {title}
      </h4>
      <div>{body}</div>
      <PostComments comments={comments} />
    </div>
  );
};
