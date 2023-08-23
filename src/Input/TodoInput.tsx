import React, { ChangeEvent, FormEvent } from "react";
import styles from "./TodoInput.module.css";
import { RiChatNewLine } from "react-icons/ri";

interface TodoInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

function TodoInput(props: TodoInputProps) {
  const handelInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    props.onTextChange(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <section className={styles.container} onSubmit={handleSubmit}>
      <form className={styles.formContainer}>
        <input
          className={styles.todoInput}
          placeholder="해야할일"
          value={props.text}
          onChange={handelInputChange}
        />
        <button type="submit" className={styles.todoInputButton}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
}

export default TodoInput;
