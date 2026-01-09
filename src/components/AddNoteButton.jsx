import { Link } from "react-router-dom";

function AddNoteButton() {
    return (
        <Link
            to="/notes/new"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "#0d6efd",
                color: "#fff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                textDecoration: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
        >
            +
        </Link>
    );
}

export default AddNoteButton;