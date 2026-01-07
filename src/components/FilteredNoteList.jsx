import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import NoteList from "./NoteList";

function FilteredNoteList({ notes, queryKey }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get(queryKey) || "";

    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <>
            <SearchBar
                value={keyword}
                onChange={e => setSearchParams({ [queryKey]: e.target.value })}
            />
            <NoteList notes={filteredNotes} />
        </>
    );
}

export default FilteredNoteList;