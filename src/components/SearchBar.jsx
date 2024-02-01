import css from './searchBar.module.css';

export default function SearchBar({ filter, onFilterChange }) {
    return (
        <input
          className= {css.input}
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      );
}