import React from "react";
import styles from "./TodoListTools.module.css";
import { BiCheckCircle } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiRadioCircle } from "react-icons/bi";

interface TodoListToolsProps {
  isAllChecked: boolean;
  onCircleAllClick: () => void;
  onRemoveAllClick: () => void;
}

function TodoListTools(props: TodoListToolsProps) {
  const handleCircleAllClick = () => {
    props.onCircleAllClick();
  };
  const handleRemoveAllClick = () => {
    props.onRemoveAllClick();
  };
  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleCircleAllClick}>
        {props.isAllChecked ? (
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
