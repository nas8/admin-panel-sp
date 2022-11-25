import { useState } from 'react';
import { PostComments } from '../PostComments/PostComments';
import styles from './styles.module.css';
import { useActions } from '../../hooks/useActions';
import { Post } from '../../types/posts';

interface PostItem {
  post: Post;
}

export const PostItem: React.FC<PostItem> = ({ post }) => {
  const { id, title, body } = post;
  const [isOpen, changeIsOpen] = useState(false);
  const { deletePost } = useActions();

  return (
    <div className={styles.root}>
      <h4>
        {id}. {title}
      </h4>
      <div>{body}</div>

      <button onClick={() => changeIsOpen(isOpen ? false : true)}>Open Comments</button>
      <button onClick={() => deletePost(id)}>Delete</button>

      {isOpen ? <PostComments id={id} /> : null}
    </div>
  );
};
