
export default function SearchBar({ filter, onFilterChange }) {
    return (
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      );
}