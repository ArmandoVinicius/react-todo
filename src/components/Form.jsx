import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  
  const handleSubmit = (text) => {
    if (text.length <= 0) {
      return;
    }
    const todoObject = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObject);
    document.getElementById('outlined-basic').value = null;
    setText(null)
  }

  return (
    <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField 
            id="outlined-basic" 
            onChange={(e) => setText(e.target.value)}
            color="success" 
            label="Tarefa" 
            variant="outlined" 
            fullWidth
          />
          <Button variant="text" color="success" onClick={() => handleSubmit(text)}>Add</Button>
        </div>
    </Paper>
  )
}
