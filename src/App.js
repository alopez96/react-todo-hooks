import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';
import TodoForm from './Form';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "learn about react",
      isCompleted: false
    },
    {
      text: "meet friend for lunch",
      isCompleted: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </div>
  );

}

export default App;