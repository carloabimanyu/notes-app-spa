import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { formatDate } from "../utils/date";

function NoteItem({ note }) {
    return (
        <article>
            <h3>
                <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h3>
            <p>{formatDate(note.createdAt)}</p>
            <p>{parser(note.body)}</p>
        </article>
    )
}

export default NoteItem;