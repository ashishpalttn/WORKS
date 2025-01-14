//  https://codesandbox.io/p/sandbox/vzl23h?file=%2Fsrc%2FApp.js%3A19%2C26

import "./styles.css";
import { useState } from "react";

export default function App() {
  const todo = [
    { id: 1, name: "walk" },
    { id: 2, name: "gym" },
    { id: 3, name: "reading" },
    { id: 4, name: "writing" },
  ];
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(todo);

  const handleTodo = () => {
    const todoObj = {};
    todoObj.id = new Date();
    todoObj.name = inputValue;
    const newList = [...todoList, todoObj];
    setTodoList(newList);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteTodo = (todo) => {
    const { id } = todo;
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Todo List</h2>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleTodo}>Add Todo </button>
      {todoList?.map((todo) => {
        return (
          <div>
            <div>
              <p>{todo.name}</p>
              <button onClick={() => handleDeleteTodo(todo)}>delete </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
