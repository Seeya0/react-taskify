import React, { useRef } from 'react';
import { inputFieldPropsType } from '../Type/type';
import './styles.css';

const InputField: React.FC<inputFieldPropsType> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type='text'
        placeholder='Type your chore!'
        value={todo}
        ref={inputRef}
        onChange={(todo) => setTodo(todo.target.value)}
        className='input__box' />
      <button type='submit' className='input_submit'>Save</button>
    </form>
  );
};

export default InputField;
