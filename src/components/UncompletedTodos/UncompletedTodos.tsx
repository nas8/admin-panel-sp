import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todos } from '../../types/todos';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './styles.module.css';
import { Draggable } from 'react-beautiful-dnd';

export const UncompletedTodos: React.FC<Todos> = ({ todos }) => {
  const { loading, error } = useTypedSelector((state) => state.todos);

  return (
    <div className={styles.root}>
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
          {(provided) => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <TodoItem todo={todo} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};
