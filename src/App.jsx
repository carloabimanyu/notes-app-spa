import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h2>This is Homepage</h2>} />
                <Route path="/archives" element={<h2>This is Archive Page</h2>} />
                <Route path="/notes/:id" element={<h2>This is Detail Note Page</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;