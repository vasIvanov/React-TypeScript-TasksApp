import React, { useRef } from 'react';
import './NewTodo.css';
interface NewTodoProps {
  todoAddHandler: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.todoAddHandler(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <input ref={textInputRef} type="text" name="todo-text" id="todo-text" />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};

export default NewTodo;
