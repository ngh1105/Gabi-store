import Sidebar from "./sidebar"
import Topbar from "./topbar"
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
    return (
        <>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                {/* Topbar */}
                <Topbar />
                {/* Sidebar */}
                <Sidebar />
                <main className="p-4 md:ml-64 h-auto pt-20">
                    <Outlet />
                </main>
            </div>

        </>
    )
}