import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onToggleArchive }) {
    if (!notes.length) {
        return <p>No notes found</p>;
    }

    return (
        <section>
            {notes.map((note) => (
                <NoteItem 
                    key={note.id} 
                    note={note} 
                    onDelete={onDelete}
                    onToggleArchive={onToggleArchive}
                />
            ))}
        </section>
    );
}

export default NoteList;