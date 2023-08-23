import React, { ReactNode } from "react";
import { useTodoState } from "../Todo/TodoProvider";
interface TodoListAreaPrpos {
  children: ReactNode;
}

function TodoListArea(props: TodoListAreaPrpos) {
  const todoState = useTodoState();
  // todoCount={todoState.todos.length}
  if (todoState.todos.length < 1) {
    return null;
  }
  return <div>{props.children}</div>;
}

export default TodoListArea;
