import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { PostComment } from '../PostComment/PostComment';
import styles from './styles.module.css';

type CommentsProps = {
  id: number;
};

export const PostComments: React.FC<CommentsProps> = ({ id }) => {
  const { comments, error, loading } = useTypedSelector((state) => state.comment);
  const { fetchComments } = useActions();

  useEffect(() => {
    fetchComments(id);
  }, []);

  const filtredComments = comments.filter((comment) => comment.postId === id);

  return (
    <div className={styles.post__comments}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {filtredComments.map((comment) => {
        return <PostComment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};
