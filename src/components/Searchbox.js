import React from "react";

const Searchbox = ({ searchfield, searchChange}) => {
  return (
    <div className = "pa2">
      <input className="pa23 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="Search here..." 
        onChange = {searchChange}
      />
    </div>
  );
};

export default Searchbox;
