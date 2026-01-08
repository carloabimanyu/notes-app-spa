import React from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/notes-data";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
        };
    }

    render() {
        return (
            <section>
                <h2>Active Notes</h2>
                <NoteList notes={this.state.notes} />
            </section>
        );
    }
}

export default HomePage;