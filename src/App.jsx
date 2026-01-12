import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePageWrapper from "./pages/AddNotePage";
import NotFoundPage from "./pages/NoteFoundPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="archives" element={<ArchivesPage />} />
                    <Route path="notes/:id" element={<NoteDetailPage />} />
                    <Route path="notes/new" element={<AddNotePageWrapper />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;