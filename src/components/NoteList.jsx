import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onToggleArchive }) {
    if (!notes.length) {
        return (
            <Typography color="text.secondary">
                No notes found
            </Typography>
        );
    }

    return (
        <Stack spacing={2}>
            {notes.map((note) => (
                <NoteItem 
                    key={note.id} 
                    note={note} 
                    onDelete={onDelete}
                    onToggleArchive={onToggleArchive}
                />
            ))}
        </Stack>
    );
}

export default NoteList;