import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Connect from "./pages/Connect";

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
        </MainLayout>
    )
}

export default App;