import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;