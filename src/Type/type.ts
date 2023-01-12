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