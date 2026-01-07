function NoteItem({ note }) {
    const id = note.id;
    const title = note.title;
    const body = note.body;
    const createdAt = note.createdAt;
    
    return (
        <article>
            <h3>{title}</h3>
            <p>{createdAt}</p>
            <p>{body}</p>
        </article>
    );
}

export default NoteItem;