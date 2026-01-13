import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { formatDate } from "../utils/date";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function NoteItem({ note, onDelete, onToggleArchive }) {
    return (
        <Card sx={{ mb: 2}}>
            <CardContent>
                <Typography 
                    variant="h6"
                    component={Link}
                    to={`/notes/${note.id}`}
                    sx={{ textDecoration: "none", color: "inherit" }}
                >
                    {note.title}
                </Typography>

                <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                >
                    {formatDate(note.createdAt)}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                    {parser(note.body)}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    size="small"
                    color="error"
                    onClick={() => onDelete(note.id)}
                >
                    Delete
                </Button>

                <Button
                    size="small"
                    onClick={() => onToggleArchive(note.id)}
                >
                    {note.archived ? "Unarchive" : "Archive"}
                </Button>
            </CardActions>
        </Card>
    );
}

export default NoteItem;