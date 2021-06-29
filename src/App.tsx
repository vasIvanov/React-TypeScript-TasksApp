import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text, completed: false, category: ''},
      
    ]);
  };

  const onDragOver = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  }

  const onDrop = (ev: React.DragEvent<HTMLDivElement>, cat: string) => {
    let id = ev.dataTransfer.getData("id");
    const todo = todos.find(t => t.id === id)!
    todo.category = cat;
    const newTodos = todos.filter(t => t.id !== id)
    newTodos.push(todo)
    setTodos(newTodos)

  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);

    });
  };

  const onDragStart = (ev: React.DragEvent<HTMLLIElement>, id: string) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  return (
    <div className="App" style={{maxWidth: '60em', margin: '0 auto'}}>
      <NewTodo todoAddHandler={todoAddHandler} />

      <div style={{display: 'flex'}}>
      <TodoList todoDeleteHandler={todoDeleteHandler} todos={todos} />
      <div className='droppable' style={{border: '1px solid black', minHeight: '50px', width: '550px'}} onDragOver={(e) => {onDragOver(e)}} onDrop={(e) => {onDrop(e, 'completed')}}>
        COMPLETED
        {todos.map(t => {
          if(t.category === 'completed') {
            return         <li key={t.id} draggable onDragStart={(e) => {onDragStart(e, t.id)}}>
            <span>{t.text}</span>
          </li>
          }
        })}
      </div>

      <div className='droppable' style={{border: '1px solid black', minHeight: '50px', width: '550px'}} onDragOver={(e) => {onDragOver(e)}} onDrop={(e) => {onDrop(e, 'wit')}}>
        Work In Progress
        {todos.map(t => {
          if(t.category === 'wit') {
            return         <li key={t.id} draggable onDragStart={(e) => {onDragStart(e, t.id)}}>
            <span>{t.text}</span>
          </li>
          }
        })}
      </div>
      </div>
    </div>
  );
};

export default App;
