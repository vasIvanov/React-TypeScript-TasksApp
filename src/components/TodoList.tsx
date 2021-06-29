import React from 'react';
import './TodoList.css';
interface TodoListProps {
  todos: { id: string; text: string; completed: boolean, category: string }[];
  todoDeleteHandler: (id: string) => void;
}


const TodoList: React.FC<TodoListProps> = (props) => {
  const onDragStart = (ev: React.DragEvent<HTMLLIElement>, id: string) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }
  return (
    <ul>
      {props.todos.map((todo) => { if(todo.category === '') return(
        <li key={todo.id} draggable onDragStart={(e) => {onDragStart(e, todo.id)}}>
          <span>{todo.text}</span>
          <button onClick={props.todoDeleteHandler.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      )})}
    </ul>
  );
};

export default TodoList;
