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

function addNote(title, body) {
    const newNote = {
        id: `notes-${Date.now()}`,
        title: title || '(untitled)',
        body,
        createdAt: new Date().toISOString(),
        archived: false,
    };

    notes.push(newNote);
    return newNote;
}

export { getActiveNotes, getArchivedNotes, getNoteById, addNote };