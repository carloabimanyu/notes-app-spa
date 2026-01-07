import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

function NoteItem({ note }) {
    const id = note.id;
    const title = note.title;
    const body = note.body;
    const createdAt = note.createdAt;
    const formattedDate = formatDate(createdAt);

    return (
        <article>
            <h3>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p><em>{formattedDate}</em></p>
            <p>{body}</p>
        </article>
    );
}

export default NoteItem;