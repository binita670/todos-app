import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TodoList(props) {
  const { todos, editTodo, removeTodo } = props;
  return (
    <Paper className={`todo-list ${todos.length <= 0 ? "zero-ht" : ""}`}>
      <List style={{ overflowY: "hidden" }}>
        <TransitionGroup>
          {todos.map((todo, i) => (
            <CSSTransition key={todo.id} classNames="todo" timeout={600}>
              <div className="todo">
                <TodoItem
                  task={todo.task}
                  id={todo.id}
                  completed={todo.completed}
                  dueDate={todo.dueDate}
                  editTodo={editTodo}
                  removeTodo={removeTodo}
                />
                {i < todos.length - 1 && <Divider />}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
    </Paper>
  );
}

export default TodoList;
