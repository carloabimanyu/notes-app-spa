import React from "react";
import { useParams } from "react-router-dom";
import parser from "html-react-parser";
import { getNoteById } from "../utils/notes-data";
import { formatDate } from "../utils/date";

function NoteDetailPage() {
    const { id } = useParams();
    return <NoteDetailPageContent noteId={id} />
}

class NoteDetailPageContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: null,
        };
    }

    componentDidMount() {
        const note = getNoteById(this.props.noteId);
        this.setState({ note });
    }

    render() {
        const { note } = this.state;

        if (!note) {
            return <p>Note not found</p>;
        }

        return (
            <article>
                <h2>{note.title}</h2>
                <p>{formatDate(note.createdAt)}</p>
                <p>{parser(note.body)}</p>
            </article>
        );
    }
}

export default NoteDetailPage;