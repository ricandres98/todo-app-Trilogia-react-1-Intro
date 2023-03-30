import React from "react";
import { TodoIcon } from "../TodoIcon";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className={`TodoItem ${props.completed && 'checked'}`}>
      <button onClick={props.onComplete}>
        <TodoIcon type='check' completed={props.completed}/>
      </button>
      <p className={`${props.completed && 'checked'}`}>{props.text}</p>
      <button onClick={props.onDelete}>
        <TodoIcon type='xMark' completed={props.completed}/>
      </button>
    </li>
  );
};

export { TodoItem };
