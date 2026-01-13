import React from "react";
import { useParams } from "react-router-dom";
import parser from "html-react-parser";
import { getNoteById } from "../utils/notes-data";
import { formatDate } from "../utils/date";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
            <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    {note.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                    {formatDate(note.createdAt)}
                </Typography>
                <Typography component="div" sx={{ mt: 2 }}>
                    {parser(note.body)}
                </Typography>
            </Paper>
        );
    }
}

export default NoteDetailPage;