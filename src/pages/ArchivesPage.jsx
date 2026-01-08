import React from "react";
import NotesPage from "./base/NotesPage";
import { getArchivedNotes } from "../utils/notes-data";
import { useSearchParams } from "react-router-dom";

function ArchivesPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeKeyword = searchParams.get("title") || "";

    function onKeywordChange(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <NotesPage
            title="Archived Notes"
            initialNotes={getArchivedNotes()}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
        />
    );
}

export default ArchivesPageWrapper;
