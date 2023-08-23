import React, { useReducer } from "react";
import "./App.css";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoListTools from "./Tools/TodoListTools";
import Divider from "./Divider/Divider";
import TodoList from "./List/TodoList";
import TodoListArea from "./List/TodoListArea";
import { todoInputReducer } from "./Todo/todoInputReducer";
import { todoReducer } from "./Todo/todoReducer";

function App() {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: "",
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  const handleTextChange = (text: string) => {
    inputDispatch({
      type: "change",
      payload: text,
    });
  };
  const handleSubmit = () => {
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

  const handleCircleClick = (id: number) => {
    todoDispatch({
      type: "checked",
      payload: {
        id: id,
      },
    });
    console.log("cir", id);
  };
  const handleRemoveClick = (id: number) => {
    todoDispatch({
      type: "remove",
      payload: {
        id: id,
      },
    });

    console.log("re", id);
  };

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };
  const handleAllCircleClick = () => {
    const isAllChecked = isTodoAllChecked();

    todoDispatch({
      type: "allChecked",
      payload: isAllChecked,
    });
  };

  const handleAllRemoveClick = () => {
    todoDispatch({
      type: "allRemove",
    });
  };

  return (
    <main className="App">
      <TodoHeader
        count={todoState.todos.filter((todo) => !todo.isChecked).length}
      />
      <TodoInput
        text={inputState.text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onCircleAllClick={handleAllCircleClick}
          onRemoveAllClick={handleAllRemoveClick}
        />
        <Divider />
        <TodoList
          todos={todoState.todos}
          onCircleClick={handleCircleClick}
          onRemoveClick={handleRemoveClick}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
