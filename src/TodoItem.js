import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import EditTodoForm from "./EditTodoForm";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { id, task, completed, editTodo, removeTodo, dueDate } = props;
  return (
    <ListItem style={{ minHeight: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          todo={task}
          id={id}
          editTodo={editTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onChange={() => {
              editTodo(id, { completed: !completed });
            }}
          />
          <ListItemText
            style={{
              textDecoration: completed ? "line-through" : "none",
              flexGrow: 0,
              width: "80%",
            }}
          >
            <Typography variant="h5">{task}</Typography>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "grey", marginLeft: "auto" }}
            >
              before {dueDate}
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;
