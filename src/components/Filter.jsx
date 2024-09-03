import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRating, setSearchRating] = useState('');

  const handleFilter = () => {
    onFilter(searchTitle, searchRating);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating"
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
