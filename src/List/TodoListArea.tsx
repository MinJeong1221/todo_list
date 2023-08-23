import React, { ReactNode } from "react";
interface TodoListAreaPrpos {
  children: ReactNode;
  todoCount: number;
}

function TodoListArea(props: TodoListAreaPrpos) {
  if (props.todoCount < 1) {
    return null;
  }
  return <div>{props.children}</div>;
}

export default TodoListArea;
