import FilteredNoteList from "../components/FilteredNoteList";
import notes from "../utils/notes";

function HomePage() {
    const activeNotes = notes.filter(note => !note.archived);

    return (
        <section>
            <h2>Active Notes</h2>
            <FilteredNoteList notes={activeNotes} queryKey="title" />
        </section>
    );
}

export default HomePage;