import React, { useState } from 'react';
import './todo.css';

const EditTodoForm = ({ currentToDo, handleEditToDoSubmit, handleEditOnChange }) => (
  <>
    <h3>TODO APP</h3>
    <form onSubmit={handleEditToDoSubmit}>
      <h4>EDIT TODO</h4>
      <label>Edit ToDo:</label>
      <input value={currentToDo.name} onChange={handleEditOnChange}></input>
      <button type="submit">UPDATE</button>
    </form>
  </>
);

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [todo, setToDo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentToDo, setCurrentToDo] = useState({});

  function handleOnChange(event) {
    setToDo(event.target.value);
  }

  function handleToDoSubmit(e) {
    e.preventDefault();
    const tempToDo = { id: todos.length + 1, name: todo };
    setTodos([...todos, tempToDo]);
    setToDo(''); // Clear the input field after adding a todo
  }

  function handleDelete(id) {
    const filteredItems = todos.filter((item) => item.id !== id);
    setTodos(filteredItems);
  }

  function handleEdit(item) {
    setIsEditing(true);
    setCurrentToDo({ id: item.id, name: item.name });
  }

  function handleEditOnChange(event) {
    setCurrentToDo({ id: currentToDo.id, name: event.target.value });
  }

  function handleEditToDoSubmit() {
    const updatedTodos = todos.map((item) => (item.id === currentToDo.id ? currentToDo : item));
    setTodos(updatedTodos);
    setIsEditing(false);
  }

  return (
    <div className="todo-container">
      {isEditing ? (
        <EditTodoForm
          currentToDo={currentToDo}
          handleEditToDoSubmit={handleEditToDoSubmit}
          handleEditOnChange={handleEditOnChange}
        />
      ) : (
        <>
          <h3>TODO APP</h3>
          <form onSubmit={handleToDoSubmit}>
            <h4>ADD TODO</h4>
            <label>Add ToDo:</label>
            <input placeholder="Enter a todo item..." value={todo} onChange={handleOnChange}></input>
            <button type="submit">ADD</button>
          </form>
        </>
      )}
      <div className="todo-display">
        <h4>TODO ITEMS</h4>
        {todos.map((item) => (
          <tr className='row-styles'>
                <td className="item-style"> <span className="todo-item">{item.name}</span></td>
                <td> <button onClick={() => handleEdit(item)}>Edit</button></td>
                <td><button onClick={() => handleDelete(item.id)}>Delete</button> </td>
          </tr>
        ))}
      </div>
    </div>
  );
}
