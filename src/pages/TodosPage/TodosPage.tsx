import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { TodosList } from '../../components/Todos/TodosList';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import styles from './styles.module.css';

export const Todos: React.FC = () => {
  const { todos, completedTodos, loading, page } = useTypedSelector((state) => state.todos);
  const { fetchTodos, changeTodosList, changeCompletedTodosList } = useActions();

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

    let droppableItem;
    const activeList = [...todos];
    const completeList = [...completedTodos];

    // Source Logic
    if (source.droppableId === 'TodoList') {
      droppableItem = activeList[source.index];
      activeList.splice(source.index, 1);
    } else {
      droppableItem = completeList[source.index];
      completeList.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === 'TodoList') {
      droppableItem.completed = false;
      activeList.splice(destination.index, 0, droppableItem);
    } else {
      droppableItem.completed = true;
      completeList.splice(destination.index, 0, droppableItem);
    }

    changeTodosList(activeList);
    changeCompletedTodosList(completeList);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={styles.root}>
        <div>
          <h4 className={styles.tasks__title}>Tasks</h4>
          <Droppable droppableId="TodoList">
            {(provided) => (
              <div
                className={styles.todos__container}
                {...provided.droppableProps}
                ref={provided.innerRef}>
                <TodosList todos={todos} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div>
          <h4 className={styles.tasks__title}>Completed Tasks</h4>
          <Droppable droppableId="CompletedTodoList">
            {(provided) => (
              <div
                className={styles.todos__container}
                {...provided.droppableProps}
                ref={provided.innerRef}>
                <TodosList todos={completedTodos} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};
