import React, { useState } from "react";
import { Paper, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Feed dog",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
    },
  ]);

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, ...newTask } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
        overflowY: "scroll",
      }}
      elevation={5}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit" variant="h5">
            TODOS APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList editTodo={editTodo} todos={todos} removeTodo={removeTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
