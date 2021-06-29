import React from 'react';
import './TodoList.css';
interface TodoListProps {
  todos: { id: string; text: string }[];
  todoDeleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.todoDeleteHandler.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
