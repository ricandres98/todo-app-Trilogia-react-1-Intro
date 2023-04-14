import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    const query = event.target.value;
    console.log(query);
    setSearchValue(query);
  };

  return (
    <form className="TodoSearch">
      <input
        placeholder="busca una tarea"
        onChange={onSearchValueChange}
        value={searchValue}
        disabled={loading}
      />
    </form>
  );
};

export { TodoSearch };
