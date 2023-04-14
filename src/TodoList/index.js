import React from "react";
import './TodoList.css';

const TodoList = (props) => {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearchResults('algo')}

      <ul>
        {props.filteredTodos.map(renderFunc)}
      </ul>
    </section>
  );
};

export { TodoList };
