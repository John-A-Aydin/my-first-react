import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface GlobalLayoutProps {
    children: ReactNode
}
export default function GlobalLayout({children}:GlobalLayoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}