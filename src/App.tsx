import React, { useState } from "react";
import { TodoType } from './Type/type';
import "./App.css";
import InputField from './components/InputField';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<TodoType>>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div className='App'>
      <p className='heading'>Task Handler!?</p>
      <InputField todo={todo} setTodo={setTodo} handleAdd={addTodo} />
    </div>
  );
};

export default App;
