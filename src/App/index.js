import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoSkeletons } from "../TodoSkeletons";
import { TodoHeader } from "../TodoHeader";

function App() {
  const {
    error,
    loading, 
    filteredTodos, 
    deleteTodo, 
    completeTodo,
    openModal,
    setOpenModal,
    searchValue, 
    setSearchValue,
    totalTodos, 
    completedTodos,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader> 
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
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
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
