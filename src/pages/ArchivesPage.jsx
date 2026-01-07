import NoteList from "../components/NoteList";
import notes from "../utils/notes";

function ArchivesPage() {
    const archivedNotes = notes.filter(note => note.archived);

    return (
        <section>
            <h2>Archived Notes</h2>
            <NoteList notes={archivedNotes} />
        </section>
    );
}

export default ArchivesPage;