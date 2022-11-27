import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { UncompletedTodos } from '../../components/UncompletedTodos/UncompletedTodos';
import styles from './styles.module.css';
import { CompletedTodos } from '../../components/CompletedTodos/CompletedTodos';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

export const Todos: React.FC = () => {
  const { todos, completedTodos, loading, page, numberOfTodos } = useTypedSelector(
    (state) => state.todos,
  );
  const { fetchTodos, setTodosPage, changeTodosList, changeCompletedTodosList } = useActions();

  useEffect(() => {
    if (!loading) {
      fetchTodos(page);
    }
  }, [page]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    let add;
    let active = [...todos];
    let complete = [...completedTodos];

    // Source Logic
    if (source.droppableId === 'TodoList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === 'TodoList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    console.log(complete);

    changeTodosList(active);
    changeCompletedTodosList(complete);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={styles.root}>
        <Droppable droppableId="TodoList">
          {(provided) => (
            <div
              className={styles.todos__container}
              {...provided.droppableProps}
              ref={provided.innerRef}>
              <UncompletedTodos todos={todos} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="CompletedTodoList">
          {(provided) => (
            <div
              className={styles.todos__container}
              {...provided.droppableProps}
              ref={provided.innerRef}>
              <CompletedTodos todos={completedTodos} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
