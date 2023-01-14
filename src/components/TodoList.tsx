import React from "react";
import { todoListType } from '../Type/type';
import { Droppable } from 'react-beautiful-dnd';

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
              <div>Single Todo is going to come here!</div>
            ))}
          </div>
        )}
      </Droppable>
    </div>);
};

export default TodoList;
