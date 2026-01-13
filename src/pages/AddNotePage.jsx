import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/notes-data";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

function AddNotePageWrapper() {
    const navigate = useNavigate();
    return <AddNotePage navigate={navigate} />;
}

class AddNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState({ title: event.target.value });
    }

    onBodyChangeHandler(event) {
        this.setState({ body: event.target.innerHTML });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        const { title, body } = this.state;

        addNote(title, body);
        this.props.navigate("/");
    }

    render() {
        const { title } = this.state;

        return (
            <section>
                <Typography variant="h5" gutterBottom>
                    Add Note
                </Typography>

                <form onSubmit={this.onSubmitHandler}>
                    <Stack spacing={2}>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={this.onTitleChangeHandler}
                            fullWidth
                        />

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, minHeight: 120 }}
                        >
                            <div
                                contentEditable
                                onInput={this.onBodyChangeHandler}
                                style={{ outline: "none" }}
                            />
                        </Paper>

                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Add Note
                        </Button>
                    </Stack>
                </form>
            </section>
        );
    }
}

export default AddNotePageWrapper;
