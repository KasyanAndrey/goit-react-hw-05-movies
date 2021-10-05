import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter the title of the movie you want to find.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <input
          className={s.SearchFormInput}
          type="text"
          name="searchQuery"
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />

        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
      <ToastContainer autoClose={3000} />
    </>
  );
}
