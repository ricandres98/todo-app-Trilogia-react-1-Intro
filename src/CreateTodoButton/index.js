import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = (props) => {
  const handleClick = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => handleClick()}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
