import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/notes-data";

class ArchivesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
        };
    }

    render() {
        return (
            <section>
                <h2>Archived Notes</h2>
                <NoteList notes={this.state.notes} />
            </section>
        );
    }
}

export default ArchivesPage;