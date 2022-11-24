import { useState } from 'react';
import { PostComments } from '../PostComments/PostComments';
import styles from './styles.module.css';

type PostItem = {
  title: string;
  body: string;
  id: number;
};

export const PostItem: React.FC<PostItem> = ({ id, title, body }) => {
  const [isOpen, changeIsOpen] = useState(false);

  return (
    <div className={styles.root}>
      <h4>
        {id}. {title}
      </h4>
      <div>{body}</div>

      <button onClick={() => changeIsOpen(isOpen ? false : true)}>Open Comments</button>

      {isOpen ? <PostComments id={id} /> : null}
    </div>
  );
};
