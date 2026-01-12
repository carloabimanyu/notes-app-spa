import React from "react";
import NotesPage from "./base/NotesPage";
import { getActiveNotes } from "../utils/notes-data";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeKeyword = searchParams.get("title") || "";

    function onKeywordChange(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <NotesPage
            title="Active Notes"
            showArchived={false}
            initialNotes={getActiveNotes()}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
        />
    );
}

export default HomePageWrapper;
