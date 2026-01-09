import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { formatDate } from "../utils/date";

function NoteItem({ note, onDelete, onToggleArchive }) {
    return (
        <article style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", position: "relative" }}>
            <h3>
                <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h3>
            <p>{formatDate(note.createdAt)}</p>
            <p>{parser(note.body)}</p>

            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <button onClick={() => onDelete(note.id)} style={{ marginRight: "5px" }}>Delete</button>
                <button onClick={() => onToggleArchive(note.id)}>
                    {note.archived ? "Unarchive" : "Archive"}
                </button>
            </div>
        </article>
    )
}

export default NoteItem;