import { Link, Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <header>
                <h1>Notes App</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/archives">Archives</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;