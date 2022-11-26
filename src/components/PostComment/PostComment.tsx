import React from 'react';
import { Comment } from '../../types/comments';

type CommentProps = {
  comment: Comment;
};

export const PostComment: React.FC<CommentProps> = ({ comment }) => {
  const { email, body } = comment;

  return (
    <div>
      <h5>{email}</h5>
      <div>{body}</div>
    </div>
  );
};
