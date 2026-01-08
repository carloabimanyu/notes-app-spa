import React from "react";
import { useParams } from "react-router-dom";
import { getNoteById } from "../utils/notes-data";

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
                <p>{note.createdAt}</p>
                <p>{note.body}</p>
            </article>
        );
    }
}

export default NoteDetailPage;