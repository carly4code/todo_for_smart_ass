import React, { useEffect, useRef, useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }

  const AddTodo: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
   // const inputRef = useRef<HTMLInputElement>(null);

    return (
      <form
        className="todos_input"
        onSubmit={(e) => {
          handleAdd(e);
        //  inputRef.current?.blur();
        }}
      >
        <TextField
        value={todo}
          type="text"
          label="Enter a Task"
        //  ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Add Todo
        </Button>
      </form>
    );
  };

  export default AddTodo;