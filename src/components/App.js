import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';
import './App.css'


function App() {

  const intitialState = () => {
    const storedTodos = localStorage.getItem("todos");
    return  storedTodos ? JSON.parse(storedTodos) : [];
  }

const [todos, setTodos] = useState(intitialState)

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
  console.log("Saved todos to localStorage:", todos);
}, [todos])


const addTodo = (todo) => {
  setTodos(prevTodos => [...prevTodos, {text: todo, isCompleted: false, id: uuidv4() }])
}

const toggleIsCompleted = (id) => {
  setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted}: todo))
  console.log(todos)
}

const deleteTodo = (id) => {
  setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
}

  return (
    <div className="container">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}



export default App;



