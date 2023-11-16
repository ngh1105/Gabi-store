import { Link, Outlet } from "react-router-dom"
import Topbar from "./topbar"
import Footer from "./footer"

export const PublicLayout = () => {
    return (
        <>
            {/* Header component */}
            <Topbar />

            {/* Pages */}
            <Outlet />

            {/* Footer component */}
            <Footer />
        </>
    )
}