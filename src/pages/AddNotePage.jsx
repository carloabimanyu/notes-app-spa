import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/notes-data";

function AddNotePageWrapper() {
    const navigate = useNavigate();
    return <AddNotePage navigate={navigate} />
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
        const { title, body } = this.state;

        return (
            <section>
                <h2>Add Note</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={this.onTitleChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Body:</label>
                        <div
                            contentEditable
                            onInput={this.onBodyChangeHandler}
                            style={{ border: "1px solid #ccc", minHeight: "100px", padding: "5px" }}
                        ></div>
                    </div>
                    <button type="submit">Add Note</button>
                </form>
            </section>
        )
    }
}

export default AddNotePageWrapper;