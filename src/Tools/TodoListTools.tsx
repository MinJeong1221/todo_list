import React from "react";
import styles from "./TodoListTools.module.css";
import { BiCheckCircle } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiRadioCircle } from "react-icons/bi";
import { useTodoDistpatch, useTodoState } from "../Todo/TodoProvider";

function TodoListTools() {
  const todoState = useTodoState();
  const todoDispatch = useTodoDistpatch();

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };
  // const handleAllCircleClick = () => {
  //   const isAllChecked = isTodoAllChecked();

  //   todoDispatch({
  //     type: "allChecked",
  //     payload: isAllChecked,
  //   });
  // };

  // const handleAllRemoveClick = () => {
  //   todoDispatch({
  //     type: "allRemove",
  //   });
  // };

  const handleCircleAllClick = () => {
    todoDispatch({
      type: "allChecked",
      payload: isTodoAllChecked(),
    });
  };
  const handleRemoveAllClick = () => {
    todoDispatch({
      type: "allRemove",
    });
  };
  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleCircleAllClick}>
        {isTodoAllChecked() ? (
          <>
            <BiRadioCircle className={styles.checkAllIco} />
            전체해제
          </>
        ) : (
          <>
            <BiCheckCircle className={styles.checkAllIco} />
            전체완료
          </>
        )}
      </button>
      <button className={[styles.button, styles.checkDelBtn].join(" ")}>
        <BsFillTrash3Fill
          className={styles.checkDelIco}
          onClick={handleRemoveAllClick}
        />
        전체삭제
      </button>
    </section>
  );
}

export default TodoListTools;
