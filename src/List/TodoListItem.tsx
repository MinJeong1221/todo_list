import React from "react";
import styles from "./TodoListItem.module.css";

import { BiCheckCircle } from "react-icons/bi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useTodoDistpatch } from "../Todo/TodoProvider";

interface TodoListItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

function TodoListItem(props: TodoListItemProps) {
  const todoDispatch = useTodoDistpatch();

  const handleCircleClick = () => {
    todoDispatch({
      type: "checked",
      payload: {
        id: props.id,
      },
    });
  };
  const handleRemoveClick = () => {
    todoDispatch({
      type: "remove",
      payload: {
        id: props.id,
      },
    });
  };
  return (
    <li className={styles.container}>
      <BiCheckCircle
        onClick={handleCircleClick}
        className={[
          styles.checkIcon,
          `${
            props.isChecked ? styles.checkCircleIcon : styles.unCheckCircleIcon
          }`,
        ].join(" ")}
      />
      <span className={props.isChecked ? styles.linethorgh : ""}>
        {props.text}
      </span>
      <IoIosRemoveCircleOutline
        onClick={handleRemoveClick}
        className={styles.removeIcon}
      />
    </li>
  );
}

export default TodoListItem;
