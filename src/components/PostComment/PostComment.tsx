import React from 'react';
import { Comment, Comments } from '../../types/comments';
import { useTypedSelector } from '../../hooks/useTypedSelector';

type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const PostComment = ({ comment }: any) => {
  const { email, body } = comment;

  return (
    <div>
      <h5>{email}</h5>
      <div>{body}</div>
    </div>
  );
};
