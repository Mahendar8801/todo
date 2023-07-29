import React from 'react'
import './TodoList.css'

const TodoList = ({todos, deleteTodo,toggleIsCompleted}) => {
   
    const handleOnChange = (id) => {
        toggleIsCompleted(id)
    }

    return (
        <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox" checked={todo.isCompleted} onChange={() => handleOnChange(todo.id)} />
            <p>{todo.text}</p>
            <i className="fas fa-trash-alt" onClick={() => deleteTodo(todo.id)}></i>
          </li>
        ))}
      </ul>
    )
}

export default TodoList