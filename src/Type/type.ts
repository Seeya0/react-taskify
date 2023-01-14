import React from 'react';

export interface TodoType {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface inputFieldPropsType {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export interface todoListType {
  todos: Array<TodoType>;
  setTodos: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
  completedTodos: Array<TodoType>;
}

export interface singleTodoType {
  index: number;
  todo: TodoType;
  todos: Array<TodoType>;
  setTodos: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
}