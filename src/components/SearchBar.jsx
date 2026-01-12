function SearchBar({ keyword, onKeywordChange }) {
    return (
        <form>
            <input 
                type="text"
                placeholder="Search by title..."
                value={keyword}
                onChange={(event) => onKeywordChange(event.target.value)}
            />
        </form>
    );
}

export default SearchBar;