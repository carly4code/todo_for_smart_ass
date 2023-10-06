import React, { useState, useEffect } from "react";
import InputField from "./AddTodo";
import TodoList from "./TodoList";


export interface Todo {
    id: number;
    todo: string;
}


const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
//   const [todos, setTodos] = useState<Array<Todo>>([]);
const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo}]);
      setTodo("");
    }
  };



  return (
      <div className="App">
        <h1 className="heading">Hi! Ready to Work?</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
              todos={todos}
              setTodos={setTodos}       />
      </div>
  );
};

export default Todo;