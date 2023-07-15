import React from 'react'
import { GiCancel } from "react-icons/gi";


const TodoList = ({todos, handelDeleting, handelUpdating}) => {

  return (
    <div>
        {todos.map((todo, index) => (
          <div key={index} className="Single-data">
            {/* Display the todo title with or without strike-through based on its status */}
            {todo.status ? (
              <p>
                {" "}
                <strike>{todo.title}</strike>
              </p>
            ) : (
              <p>{todo.title}</p>
            )}
            <div>
                {/* Button to update the status of the todo */}
              <button onClick={() => handelUpdating(todo.id)}>
                {todo.status ? "Completed" : "Not Completed"}
              </button>

              {/* Icon to delete the todo */}
              <GiCancel
                className="icon"
                onClick={() => handelDeleting(todo.id)}
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default TodoList