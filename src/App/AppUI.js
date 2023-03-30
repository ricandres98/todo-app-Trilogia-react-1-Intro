import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoSkeletons } from "../TodoSkeletons";

function AppUI() {
  const {
    error,
    loading, 
    filteredTodos, 
    deleteTodo, 
    completeTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate!! hubo un error!</p>}
        {loading && <TodoSkeletons />}
        {!loading && !filteredTodos.length && <p>¡Crea tu primer TODO!</p>}
        {filteredTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
