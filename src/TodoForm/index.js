import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState('');
	const {
		addTodo,
		setOpenModal
	} = React.useContext(TodoContext);

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	}

	const onCancel = () => {
		setOpenModal(false);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false)
	};
  return (
    <form 
			className="TodoForm"
			onSubmit={(event) => onSubmit(event)}
		>
      <label
				for="todo-text"
			>
				Escribe tu nuevo TODO
			</label>
      <textarea 
				placeholder="Cortar la cebolla para el almuerzo" 
				value={newTodoValue}
				onChange={(event) => onChange(event)}
				id="todo-text"
			/>
      <div
				className="TodoForm__buttons-container"	
			>
        <button 
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
					type="submit"
					className="submit-button"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
