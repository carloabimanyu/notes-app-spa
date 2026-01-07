import FilteredNoteList from "../components/FilteredNoteList";
import notes from "../utils/notes";

function ArchivesPage() {
    const archivedNotes = notes.filter(note => note.archived);

    return (
        <section>
            <h2>Archived Notes</h2>
            <FilteredNoteList notes={archivedNotes} queryKey="title" />
        </section>
    );
}

export default ArchivesPage;