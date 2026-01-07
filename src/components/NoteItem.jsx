import { Link } from "react-router-dom";

function NoteItem({ note }) {
    const id = note.id;
    const title = note.title;
    const body = note.body;
    const createdAt = note.createdAt;

    return (
        <article>
            <h3>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p>{createdAt}</p>
            <p>{body}</p>
        </article>
    );
}

export default NoteItem;