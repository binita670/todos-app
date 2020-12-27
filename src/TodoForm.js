import React, { useState } from "react";
import { v4 } from "uuid";
import { Paper, TextField } from "@material-ui/core";

export default function TodoForm(props) {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { todos, setTodos } = props;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const newTodosList = [
            ...todos,
            { id: v4(), task: value, completed: false, dueDate: date },
          ];
          setTodos(newTodosList);
          setValue("");
        }}
      >
        <TextField
          value={value}
          variant="outlined"
          onChange={handleInputChange}
          margin="normal"
          label="Add New Task"
          style={{ marginRight: 10 }}
          fullWidth
        />
        <TextField
          id="date"
          variant="outlined"
          label="Due Date"
          type="date"
          defaultValue={date}
          margin="normal"
          fullWidth
          onChange={handleDateChange}
        />
      </form>
    </Paper>
  );
}
