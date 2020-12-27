import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function EditTodoForm({ id, todo, editTodo, setIsEditing }) {
  const [value, setValue] = useState(todo);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, { task: value });
        setIsEditing(false);
      }}
      style={{
        marginLeft: "1rem",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <TextField
        fullWidth
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
      />
      <Button variant="text" type="submit">
        Edit
      </Button>
    </form>
  );
}

export default EditTodoForm;
