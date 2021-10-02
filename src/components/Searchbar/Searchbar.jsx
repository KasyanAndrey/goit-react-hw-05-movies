import { useState } from 'react';
import s from './Searchbar.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />

        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
      <ToastContainer autoClose={3000} />
    </>
  );
}
