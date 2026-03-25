import './SearchBar.css';
import { Button } from './Button';

export function SearchBar({ searchQuery, onSearchChange, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      alert('Please enter a search term');
      return;
    }
    onSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search jobs by title or keywords..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <Button onClick={handleSearch} variant="primary">
        Search
      </Button>
    </div>
  );
}
