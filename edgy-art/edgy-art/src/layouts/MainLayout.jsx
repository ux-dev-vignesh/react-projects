import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomeCursor";

const MainLayout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="hidden md:block">
                    <CustomCursor />
                </div>

                <Header />
                <main className="flex-grow pt-[70px]">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout;