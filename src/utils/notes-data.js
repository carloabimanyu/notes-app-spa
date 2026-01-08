import notes from "../data/notes";

function getActiveNotes() {
    return notes.filter((note) => !note.archived);
}

function getArchivedNotes() {
    return notes.filter((note) => note.archived);
}

function getNoteById(id) {
    return notes.find((note) => note.id === id);
}

export { getActiveNotes, getArchivedNotes, getNoteById };