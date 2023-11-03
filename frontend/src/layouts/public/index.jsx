import { Link, Outlet } from "react-router-dom"
import { Topbar } from "./Topbar/topbar"
import Footer from "./Footer/footer"

export const PublicLayout = () => {
    return (
        <>
            {/* Header component */}
            <Topbar />

            {/* Pages */}
            <Outlet />

            {/* Footer component */}
            <Footer/>
        </>
    )
}