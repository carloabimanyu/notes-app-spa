import NoteList from "../components/NoteList";
import notes from "../utils/notes";

function HomePage() {
    const activeNotes = notes.filter(note => !note.archived);

    return (
        <section>
            <h2>Active Notes</h2>
            <NoteList notes={activeNotes} />
        </section>
    );
}

export default HomePage;