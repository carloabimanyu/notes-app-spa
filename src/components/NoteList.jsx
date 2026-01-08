import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    if (!notes.length) {
        return <p>No notes found</p>;
    }

    return (
        <section>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </section>
    );
}

export default NoteList;