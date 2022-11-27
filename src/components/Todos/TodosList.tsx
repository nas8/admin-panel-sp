import React from 'react';
import { Todos } from '../../types/todos';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './styles.module.css';
import { Draggable } from 'react-beautiful-dnd';

export const TodosList: React.FC<Todos> = ({ todos }) => {
  return (
    <div className={styles.root}>
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className={styles.todos}>
              <TodoItem todo={todo} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};
