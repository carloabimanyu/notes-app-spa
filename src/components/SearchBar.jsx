function SearchBar({ value, onChange }) {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search by title..." 
                value={value}
                onChange={onChange}
            />
        </form>
    );
}

export default SearchBar;