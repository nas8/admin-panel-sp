import React from 'react';
import { Comments } from '../../types/comments';

export const PostComments: React.FC<Comments> = ({ comments }) => {
  console.log(comments);

  return (
    <div>
      <h5>Comments</h5>
      {comments.map(({ email, body, id }) => {
        return (
          <div key={id}>
            <div>
              {id} {email}
            </div>
            <div>{body}</div>
          </div>
        );
      })}
    </div>
  );
};
