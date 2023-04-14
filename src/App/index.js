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
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

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
          loading={loading}
          />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        filteredTodos={filteredTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodoSkeletons />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => (
          <p>No hay resultados para "{searchValue}"</p>
        )}
        render={(todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* {(todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
