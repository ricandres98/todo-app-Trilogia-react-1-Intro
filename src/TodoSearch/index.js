import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
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
