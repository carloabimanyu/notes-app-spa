import React from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/notes-data";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeKeyword = searchParams.get('title') || '';

    return <HomePage defaultKeyword={activeKeyword} />;
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: this.props.defaultKeyword,
        };

        this.onKeywordChange = this.onKeywordChange.bind(this);
    }

    onKeywordChange(keyword) {
        this.setState({ keyword });
    }

    render() {
        const { notes, keyword } = this.state;
        const filteredNotes = keyword
            ? notes.filter(note => 
                note.title.toLowerCase().includes(keyword.toLowerCase())
            )
            : notes;

        return (
            <section>
                <h2>Active Notes</h2>
                <SearchBar keyword={this.state.keyword} onKeywordChange={this.onKeywordChange} />
                <NoteList notes={filteredNotes} />
            </section>
        );
    }
}

export default HomePageWrapper;