import { Link, Outlet } from "react-router-dom"
import { Topbar } from "./topbar"

export const PublicLayout = () => {
    return (
        <>
            {/* Header component */}
            <Topbar />

            {/* Pages */}
            <Outlet />

            {/* Footer component */}
        </>
    )
}