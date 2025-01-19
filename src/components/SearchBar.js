import React from "react";

function SearchBar({alphabetical, price, onAlphabetical, onPrice, onFilter, filter}) {

  function handleAlphabet(){
    onAlphabetical();

  }
  function handlePrice(){
    onPrice();
  }

  function handleFilter(event){
    onFilter(event.target.value);
  }



  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphabetical}
          onChange={handleAlphabet}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={price}
          onChange={handlePrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter} value={filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
