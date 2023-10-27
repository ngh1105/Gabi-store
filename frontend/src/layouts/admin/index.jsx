import {Outlet } from "react-router-dom"
import { Siderbar } from "./siderbar"

export const AdminLayout = () => {
    return (
        <>
            {/* Header component */}
            <Siderbar />          
            {/* Pages */}
            <Outlet /> {/* Footer component */}
        </>
    )
}