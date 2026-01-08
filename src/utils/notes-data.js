import notes from "../data/notes";

function getActiveNotes() {
    return notes.filter((note) => !note.archived);
}

function getArchivedNotes() {
    return notes.filter((note) => note.archived);
}

export { getActiveNotes, getArchivedNotes };