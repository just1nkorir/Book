

import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState('title');

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query, searchBy);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-query">Search:</label>
      <input type="text" id="search-query" value={query} onChange={event => setQuery(event.target.value)} />

      <label htmlFor="search-by">Search By:</label>
      <select id="search-by" value={searchBy} onChange={event => setSearchBy(event.target.value)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="isbn">ISBN</option>
        <option value="keyword">Keyword</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;