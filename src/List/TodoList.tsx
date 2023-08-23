import React from "react";
import styles from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";
import { TodoType } from "../Todo/todoReducer";
import { useTodoState } from "../Todo/TodoProvider";

function TodoList() {
  const todoStaet = useTodoState();
  return (
    <div>
      <ul className={styles.ulContainer}>
        {todoStaet.todos.map((todo: TodoType) => {
          return (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
