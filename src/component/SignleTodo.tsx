import React, { useState } from "react";
//import { useRef } from "react";

import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export interface Todo {
    id: number;
    todo: string;
}

const SingleTodo: React.FC<{
    index: number;
    todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}> = ({ index, todo, todos, setTodos }) => {


    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    //   const inputRef = useRef<HTMLInputElement>(null);
    //   useEffect(() => {
    //     inputRef.current?.focus();
    //   }, [edit]);




    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        console.log('editing');

        setEdit(false);
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };


    return (

        <form
            onSubmit={(e) => handleEdit(e, todo.id)}
        //ref={provided.innerRef}
        >
            <ListItemButton className="todo_item">
                {edit ? (
                    <TextField
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className="todos__single--text"
                    //  ref={inputRef}
                    />

                ) : (
                    <ListItemText primary={todo.todo} />
                )}

                <ListItemIcon>
                    <IconButton aria-label="edit" onClick={() => setEdit(true)}>
                        <EditIcon />
                    </IconButton>
                </ListItemIcon>
                <ListItemIcon>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemIcon>

            </ListItemButton>
        </form >
    );
};

export default SingleTodo;