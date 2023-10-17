import { Link, Outlet } from "react-router-dom"

export const PublicLayout = () => {
    return (
        <>
            {/* Header component */}

            {/* Pages */}
            <Outlet />

            {/* Footer component */}
        </>
    )
}