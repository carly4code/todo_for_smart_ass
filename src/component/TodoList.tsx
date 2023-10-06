import React from "react";
import SingleTodo from "./SignleTodo";
import List from '@mui/material/List';

export interface Todo {
    id: number;
    todo: string;
}

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
}) => {
  return (
    <div className="container">
           {todos.length > 0 ? (
           <List>
            <span className="todos__heading">Move your ass to do the TASKS</span>
            {todos?.map((todo, index) => (
              <SingleTodo
              index={index}
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              />
            ))}
            </List>
            ):(
                <div>
                  <span className="heading">You have nothing to do! Go to sleep</span>
                </div>
              )}
    </div>
  );
};

export default TodoList;

