import React from "react";
import { todoListType } from '../Type/type';
import { Droppable } from 'react-beautiful-dnd';
import SingleTodo from './SingleTodo';

const TodoList: React.FC<todoListType> = ({ todos, setTodos, setCompletedTodos, completedTodos }) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
          <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className='todos__heading'>ActiveTasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos ${snapshot.isDraggingOver ? 'dragcomplete' : 'remove'}`}
          >
            <span className='todos__heading'>Completed Tasks</span>
            {completedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={completedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>);
};

export default TodoList;
