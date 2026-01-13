import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function AddNoteButton() {
    return (
        <Fab
            color="primary"
            component={Link}
            to="/notes/new"
            sx={{
                position: "fixed",
                bottom: 16,
                right: 16,
            }}
            aria-label="add note"
        >
            <AddIcon />
        </Fab>
    );
}

export default AddNoteButton;