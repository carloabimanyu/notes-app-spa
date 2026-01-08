import React from "react";
import NoteList from "../../components/NoteList";
import SearchBar from "../../components/SearchBar";
import { filterNotesByTitle } from "../../utils/filter";

class NotesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: props.initialNotes || [],
            keyword: props.defaultKeyword || "",
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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

    render() {
        const { notes, keyword } = this.state;
        const filteredNotes = filterNotesByTitle(notes, keyword);

        return (
            <section>
                <h2>{this.props.title}</h2>
                <SearchBar
                    keyword={keyword}
                    onKeywordChange={this.onKeywordChangeHandler}
                />
                <NoteList notes={filteredNotes} />
            </section>
        );
    }
}

export default NotesPage;
