import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = !!searchValue
    ? todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : todos;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  return {
    loading: loading,
    error: error,
    totalTodos: totalTodos,
    completedTodos: completedTodos,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    filteredTodos: filteredTodos,
    completeTodo: completeTodo,
    deleteTodo: deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
  };
}

export { useTodos };
