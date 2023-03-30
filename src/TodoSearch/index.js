import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    const query = event.target.value;
    console.log(query);
    setSearchValue(query);
  };

  return (
    <form className="TodoSearch">
      <input
        placeholder="cebolla"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </form>
  );
};

export { TodoSearch };
