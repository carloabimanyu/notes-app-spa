function NoteItem({ note }) {
    return (
        <article>
            <h3>{note.title}</h3>
            <p>{note.createdAt}</p>
            <p>{note.body}</p>
        </article>
    )
}

export default NoteItem;