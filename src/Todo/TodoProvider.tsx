import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import {
  TodoInputActionType,
  todoInputReducer,
  TodoInputStateType,
} from "./todoInputReducer";
import { TodoActionType, todoReducer, TodoStateType } from "./todoReducer";

interface TodoProviderProps {
  children: ReactNode;
}
const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatContext = createContext<Dispatch<TodoActionType> | null>(null);
const InputTodoStateContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext =
  createContext<Dispatch<TodoInputActionType> | null>(null);

function TodoProvider(props: TodoProviderProps) {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: "",
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatContext.Provider value={todoDispatch}>
        <InputTodoStateContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoStateContext.Provider>
      </TodoDispatContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () => {
  const value = useContext(TodoStateContext);
  if (!value) {
    throw new Error("cannot find useTodoState");
  }
  return value;
};
export const useTodoDistpatch = () => {
  const value = useContext(TodoDispatContext);
  if (!value) {
    throw new Error("cannot find useTodoState");
  }
  return value;
};
export const useInputTodoState = () => {
  const value = useContext(InputTodoStateContext);
  if (!value) {
    throw new Error("cannot find useTodoState");
  }
  return value;
};
export const useInputTodoDisPatch = () => {
  const value = useContext(InputTodoDispatchContext);
  if (!value) {
    throw new Error("cannot find useTodoState");
  }
  return value;
};

export default TodoProvider;
