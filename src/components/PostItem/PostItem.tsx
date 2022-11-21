import styles from './styles.module.css';

type PostItem = {
  title: string;
  body: string;
  id: number;
};

export const PostItem: React.FC<PostItem> = ({ id, title, body }) => {
  return (
    <div className={styles.root}>
      <h4>
        {id}. {title}
      </h4>
      <div>{body}</div>
    </div>
  );
};
