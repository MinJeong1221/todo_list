import React, { ChangeEvent, FormEvent } from "react";
import styles from "./TodoInput.module.css";
import { RiChatNewLine } from "react-icons/ri";
import {
  useInputTodoDisPatch,
  useInputTodoState,
  useTodoDistpatch,
} from "../Todo/TodoProvider";

function TodoInput() {
  const todoDispatch = useTodoDistpatch();
  const inputDispatch = useInputTodoDisPatch();
  const inputState = useInputTodoState();

  const handelInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: "change",
      payload: event.target.value,
    });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputState.text) {
      return;
    }
    todoDispatch({
      type: "add",
      payload: {
        text: inputState.text,
      },
    });
    inputDispatch({
      type: "clear",
    });
  };

  return (
    <section className={styles.container} onSubmit={handleSubmit}>
      <form className={styles.formContainer}>
        <input
          className={styles.todoInput}
          placeholder="해야할일"
          value={inputState.text}
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
