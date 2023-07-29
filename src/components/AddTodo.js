import React, { useRef } from "react"
import "./AddTodo.css"

const AddTodo = ({addTodo}) => {
    const inputRef = useRef(null)

    const handleButtonClick = (e) => {
        e.preventDefault()
 
        if (inputRef.current.value) {
            addTodo(inputRef.current.value)
            inputRef.current.value = ""
            inputRef.current.focus()
        }

    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputRef.current.value) {
            addTodo(inputRef.current.value)
            inputRef.current.value = ""
            inputRef.current.focus()
        }
    }
   
    return (
        <div className="addtodo-wrapper">
            <div className="addtodo">
                <input type="text" ref={inputRef} onKeyDown={handleKeyDown} placeholder="Add Todo..." />
                <button onClick={handleButtonClick}>Add Todo</button>
            </div>
        </div>
    )
}

export default AddTodo