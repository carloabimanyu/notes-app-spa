import TextField from "@mui/material/TextField";

function SearchBar({ keyword, onKeywordChange }) {
    return (
        <form>
            <TextField
                label="Search by title"
                variant="outlined"
                value={keyword}
                onChange={(event) => onKeywordChange(event.target.value)}
                fullWidth
                size="small"
                margin="normal"
            />
        </form>
    );
}

export default SearchBar;