import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="archives" element={<ArchivesPage />} />
                    <Route path="notes/:id" element={<h2>This is Detail Note Page</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;