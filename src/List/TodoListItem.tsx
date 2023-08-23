import React from "react";
import styles from "./TodoListItem.module.css";

import { BiCheckCircle } from "react-icons/bi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface TodoListItemProps {
  id: number;
  text: string;
  isChecked: boolean;
  onCircleClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

function TodoListItem(props: TodoListItemProps) {
  const handleCircleClick = () => {
    props.onCircleClick(props.id);
  };
  const handleRemoveClick = () => {
    props.onRemoveClick(props.id);
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
