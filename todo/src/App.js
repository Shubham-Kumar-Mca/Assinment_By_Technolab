import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

const App = () => {
  // State variables
  const [todos, setTodos] = useState([]); // Holds the list of todos
  const [completedTasks, setCompletedTasks] = useState(0);  // Holds the count of completed tasks

 
  // Function to add a new todo item
  const handelAdding = (text) => {
    if (text !== "") {
      const newUser = {
        id: new Date(),
        title: text,
        status: false,
      };
      setTodos([...todos, newUser]); // Add the new todo to the todos array
    }
    return;
  };

  // Function to delete a todo item
  const handelDeleting = (id) => {
    // Remove the todo with the specified id from the todos array
    const filterData = todos.filter((item) => item.id !== id);
    setTodos(filterData); // Update the todos array

    // Count the number of completed tasks
    const completedCount = filterData.filter((task) => task.status).length;
    setCompletedTasks(completedCount); // Update the completed tasks count
  };

  // Function to update the status of a todo item
  const handelUpdating = (id) => {
    const updatedData = todos.map((item) => {
      if (item.id === id) {
        // Toggle the status of the todo item with the specified id
        return { ...item, status: !item.status };
      } else {
        return item;
      }
    });
    setTodos(updatedData); // Update the todos array

    // Count the number of completed tasks
    const completedCount = updatedData.filter((task) => task.status).length;
    setCompletedTasks(completedCount); // Update the completed tasks count
  };

  return (
    <div className="container">
      <div>
        <h2>Completed tasks : {completedTasks}</h2>
        <h2>Total tasks : {todos.length}</h2>
      </div>
      
      {/* Render the TodoList component and pass the necessary props */}
      <TodoList todos={todos} handelDeleting = {handelDeleting} handelUpdating = {handelUpdating}/>
      
      {/* Render the TodoItem component and pass the necessary props */}
      <TodoItem handelAdding = {handelAdding}/>
    </div>
  );
};

export default App;
