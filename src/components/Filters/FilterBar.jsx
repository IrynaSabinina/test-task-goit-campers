import { toast } from 'react-toastify';
import styles from "./FilterBar.module.css"
import { useState } from 'react';

export const FilterBar =()=>{
      const [search, setSearch] = useState('');
      const handleSearchChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      toast.error('Please enter location');
    }
    // onSubmit(search);
    setSearch('');
  };
    return (
        <>
           <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Location"
        autoComplete="off"
        autoFocus
        placeholder="Kyiv, Ukraine"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
        </>
    )
}