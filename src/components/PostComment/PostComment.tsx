import React from 'react';
import { Comment } from '../../types/comments';
import styles from './styles.module.css';

type CommentProps = {
  comment: Comment;
};

export const PostComment: React.FC<CommentProps> = ({ comment }) => {
  const { email, body } = comment;

  return (
    <div className={styles.comment}>
      <h5>{email}:</h5>
      <div>{body}</div>
    </div>
  );
};
