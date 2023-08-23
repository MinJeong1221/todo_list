import React from "react";
import styles from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";
import { TodoType } from "../Todo/todoReducer";
interface TodoListProps {
  todos: TodoType[];
  onCircleClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

function TodoList(props: TodoListProps) {
  return (
    <div>
      <ul className={styles.ulContainer}>
        {props.todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
              onCircleClick={props.onCircleClick}
              onRemoveClick={props.onRemoveClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
