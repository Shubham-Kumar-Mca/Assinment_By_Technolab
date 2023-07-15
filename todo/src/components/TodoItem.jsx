import React, { useState } from "react";

const TodoItem = ({handelAdding}) => {
  const [text, setText] = useState("");

  const handelInputChnage = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="input-part">
      {/* Input field for entering a new todo item */}
      <input
        placeholder="Enter Something..."
        value={text}
        onChange={handelInputChnage}
      />
      {/* Button to add the new todo item */}
      <button
        onClick={() => {
          handelAdding(text); // Invoke the handelAdding function from props and pass the text as an argument
          setText(""); // Clear the input field after adding the todo item
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoItem;
