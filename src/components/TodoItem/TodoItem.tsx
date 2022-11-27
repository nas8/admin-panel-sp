import React from 'react';
import { Todo } from '../../types/todos';
import styles from './styles.module.css';

interface TodoItem {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItem> = ({ todo }) => {
  const { id, title } = todo;

  return (
    <div className={styles.root}>
      {id}. {title}
    </div>
  );
};
