import { Link, useParams } from "react-router-dom";
import notes from "../utils/notes";

function NoteDetailPage() {
    const { id } = useParams();
    const note = notes.find(n => n.id === id);

    if (!note) {
        return <p>Note not found</p>;
    }

    const formattedDate = new Date(note.createdAt).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section>
            <h2>{note.title}</h2>
            <p><em>{formattedDate}</em></p>
            <p>{note.body}</p>
            <Link to={note.archived ? "/archives" : "/"}>Back</Link>
        </section>
    );
}

export default NoteDetailPage;