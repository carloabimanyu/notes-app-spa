import React from "react";
import NoteList from "../../components/NoteList";
import SearchBar from "../../components/SearchBar";
import { filterNotesByTitle } from "../../utils/filter";
import AddNoteButton from "../../components/AddNoteButton";
import { deleteNote, toggleArchiveNote } from "../../utils/notes-data";

class NotesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: props.initialNotes || [],
            keyword: props.defaultKeyword || "",
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.defaultKeyword !== this.props.defaultKeyword) {
            this.setState({ keyword: this.props.defaultKeyword });
        }
    }

    onKeywordChangeHandler(keyword) {
        this.setState({ keyword });
        if (this.props.onKeywordChange) {
            this.props.onKeywordChange(keyword);
        }
    }

    onDeleteNoteHandler(id) {
        deleteNote(id);
        this.setState({ notes: this.state.notes.filter(note => note.id !== id )});
    }

    onToggleArchiveHandler(id) {
        toggleArchiveNote(id);
        this.setState({ notes: this.state.notes });
    }

    render() {
        const { notes, keyword } = this.state;
        const { showArchived, title } = this.props;

        const notesForPage = notes.filter(note => note.archived === showArchived);
        const filteredNotes = filterNotesByTitle(notesForPage, keyword);

        return (
            <section>
                <h2>{title}</h2>
                <SearchBar
                    keyword={keyword}
                    onKeywordChange={this.onKeywordChangeHandler}
                />
                <NoteList 
                    notes={filteredNotes} 
                    onDelete={this.onDeleteNoteHandler}
                    onToggleArchive={this.onToggleArchiveHandler}
                />
                {showArchived === false && <AddNoteButton />}
            </section>
        );
    }
}

export default NotesPage;
