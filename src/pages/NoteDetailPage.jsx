import { useParams } from "react-router-dom";

function NoteDetailPage() {
    const { id } = useParams();

    return (
        <section>
            <h2>Note Detail</h2>
            <p>Note ID: {id}</p>
        </section>
    );
}

export default NoteDetailPage;