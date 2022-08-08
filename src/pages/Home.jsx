import { Container, List, Paper } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export default function Home() {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      setTodos([...todos, todo]);
   };

   const deleteTodo = (id) => {
      setTodos(todos.filter(t => t.id !== id));
   }

   const editTodo = (id, editedText) => {
      setTodos(todos.map(t => {
         if (t.id === id) {
            return { ...t, text: editedText };
         }
         return t;
      }));
   }

   const handleError = (error) => {
      console.log(error);
   }

   return (
      <Container maxWidth='xs' style={{ marginTop: '1em' }}>
         <Form addTodo={addTodo} handleError={handleError} />
         {todos.length > 0 ?
            <List>
               {todos.map((todo) => (
                  <div key={todo.id} style={{ marginTop: "1em" }}>
                     <TodoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
                  </div>
               ))}
            </List>
            :
            <Paper
               style={{
                  marginTop: "1em",
                  textAlign: "center",
                  padding: "1em 0em",
                  fontSize: "1.2em"
               }}>
               Adicione uma tarefa acima para aparecer aqui.
            </Paper>}
      </Container>
   )
}
